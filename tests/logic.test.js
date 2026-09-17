import test from 'node:test';
import assert from 'node:assert/strict';
import { wrapAngle, angularDistance, scoreForShard, difficultyAt, daySeed, mulberry32, TAU } from '../src/logic.js';
test('angles wrap into one revolution',()=>{assert.equal(wrapAngle(-Math.PI),Math.PI);assert.ok(wrapAngle(TAU+.2)-.2<1e-12)});
test('angular distance crosses zero correctly',()=>assert.ok(angularDistance(.05,TAU-.05)<.11));
test('score scales with combo',()=>{assert.equal(scoreForShard(1),10);assert.equal(scoreForShard(5),50)});
test('difficulty remains within playable limits',()=>{assert.equal(difficultyAt(0).speed,1);assert.equal(difficultyAt(1000).spawnEvery,.62)});
test('daily random generator is deterministic',()=>{const a=mulberry32(daySeed(new Date(2026,8,17))),b=mulberry32(20260917);assert.equal(a(),b());assert.equal(a(),b())});
