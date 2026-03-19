// Fast attack: only when knight is asleep
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}
// Spy: if ANYONE is awake
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}
// Signal: prisoner awake AND archer asleep
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}
// Free prisoner:
// Case 1: Dog present → knight must be asleep
// Case 2: No dog → archer asleep AND prisoner awake AND knight asleep
export function canFreePrisoner( 
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
 ) {
  if (petDogIsPresent) {
    return !archerIsAwake;
  }
  return !knightIsAwake && !archerIsAwake && prisonerIsAwake;
}