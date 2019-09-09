export const spectrumEvaluationDirection = {
    // Indicates checking if the min < value <> > max = 'Warning' min > max = 'Critical'
    UPPER: 'UPPER',
    // Indicates checking if the value < min & value > max = 'Warning' min > max = 'Critical'
    LOWER: 'LOWER'
};

// patientPulse = 49bpm

// minLowerRange = 55 -> (warning)
// maxLowerRange = 50 -> (critical)


//minUpperRange = 90 -> (warning)
//maxUpperRange = 100 -> (critical)

/**
 * Upper bounds check
 * 
 * if (patientPulse > minUpperRange && patientPulse < maxUpperRange) {
 *  return 'Warning';
 * }
 * else if (patientPulse > maxUpperRange) {
 *  return 'Critical;
 * }
 * else {
 *  // Normal.
 * }
 */

/**
 * Lower bounds check
 * 
 * if (patientPulse < minLowerRange && patientPulse > maxLowerRange) {
 *  return 'Warning';
 * }
 * else if (patientPulse < maxLowerRange) {
 *  return 'Critical;
 * }
 * else {
 *  // Normal.
 * }
 */