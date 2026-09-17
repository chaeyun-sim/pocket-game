import test from 'node:test';
import assert from 'node:assert/strict';
import { wrapAngle, angularDistance, scoreForShard, scoreForEchoAction, orbitSpeedMultiplier, pickSafeAngle, shouldTriggerWarp, difficultyAt, daySeed, mulberry32, TAU } from '../src/logic.js';
test('angles wrap into one revolution',()=>{assert.equal(wrapAngle(-Math.PI),Math.PI);assert.ok(wrapAngle(TAU+.2)-.2<1e-12)});
test('angular distance crosses zero correctly',()=>assert.ok(angularDistance(.05,TAU-.05)<.11));
test('score scales with combo',()=>{assert.equal(scoreForShard(1),10);assert.equal(scoreForShard(5),50)});
test('ECHO actions use restrained fixed bonuses',()=>{
  assert.equal(scoreForEchoAction('hit'),10);
  assert.equal(scoreForEchoAction('cut'),20);
  assert.equal(scoreForEchoAction('paradox'),-100);
});
test('NOX accelerates through crossings and slows at ribbon tips',()=>{
  assert.ok(orbitSpeedMultiplier('nox',0)>orbitSpeedMultiplier('nox',Math.PI/4));
  assert.ok(orbitSpeedMultiplier('nox',Math.PI/2)>orbitSpeedMultiplier('nox',Math.PI/4));
  assert.equal(orbitSpeedMultiplier('luma',0),1);
});
test('warp selects the first safe random destination',()=>{
  const values=[.1,.25,.75];
  assert.equal(pickSafeAngle(()=>values.shift(),angle=>angle>Math.PI,0),TAU*.75);
  assert.equal(pickSafeAngle(()=>.1,()=>false,1.2,2),1.2);
});
test('random warp only triggers for RIFT when cooldown is ready',()=>{
  let called=false;
  assert.equal(shouldTriggerWarp('luma',0,()=>{called=true;return 0;}),false);
  assert.equal(called,false);
  assert.equal(shouldTriggerWarp('rift',1,()=>0),false);
  assert.equal(shouldTriggerWarp('rift',0,()=>.09),true);
  assert.equal(shouldTriggerWarp('rift',0,()=>.1),false);
});
test('difficulty remains within playable limits',()=>{assert.equal(difficultyAt(0).speed,1);assert.equal(difficultyAt(1000).spawnEvery,.62)});
test('daily random generator is deterministic',()=>{const a=mulberry32(daySeed(new Date(2026,8,17))),b=mulberry32(20260917);assert.equal(a(),b());assert.equal(a(),b())});
