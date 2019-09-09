import { VitalDetails } from 'src/wmd/interfaces/vital-details';
import { spectrumEvaluationDirection } from '../rule-eval-direction';
import { Client } from 'src/wmd/interfaces/clients';

export const ALERTS: any[] = [
  {
    id: '12345',
    patient_name: 'Bonnie Lu',
    type: 'Heart Rate',
    severity: 'Critical',
    threshold_crossed: '90',
    date_time: '05/20/2019 15:00',
    latest_comment: 'Nurse_01: Called the patient and suggested procedure to bring down heart rate'
  },
  {
    id: '12345',
    patient_name: 'Bonnie Lu',
    type: 'Heart Rate',
    severity: 'High',
    threshold_crossed: '90',
    date_time: '05/20/2019 13:00',
    latest_comment: ''
  }
];

export const Clients: Client[] =
[
 {
   'id': 1001,
   'firstName': 'Arnie ',
   'lastName': 'Johnson',
   'age': 23
 },
 {
   'id': 1028,
   'firstName': 'Ralph',
   'lastName': 'Nutter',
   'age': 56
 },
 {
   'id': 1055,
   'firstName': 'Jessie ',
   'lastName': 'Marks',
   'age': 67
 },
 {
   'id': 1082,
   'firstName': 'Billy',
   'lastName': 'Cadilac ',
   'age': 48
 },
 {
   'id': 1109,
   'firstName': 'Emma',
   'lastName': 'Star',
   'age': 35
 },
 {
   'id': 1136,
   'firstName': 'Cora',
   'lastName': 'Unicorn',
   'age': 76
 },
 {
   'id': 1163,
   'firstName': 'Jennifer',
   'lastName': 'Jacobs',
   'age': 32
 },
 {
   'id': 1190,
   'firstName': 'Elana',
   'lastName': 'Baskets',
   'age': 57
 },
 {
   'id': 1217,
   'firstName': 'Jimmy ',
   'lastName': 'Buckets',
   'age': 44
 },
 {
   'id': 1244,
   'firstName': 'Tamara',
   'lastName': 'Bizal',
   'age': 55
 },
 {
   'id': 1271,
   'firstName': 'Tammy',
   'lastName': 'Bee',
   'age': 76
 },
 {
   'id': 1298,
   'firstName': 'Richie',
   'lastName': 'Shazam',
   'age': 32
 },
 {
   'id': 1325,
   'firstName': 'John',
   'lastName': 'Johnson',
   'age': 43
 },
 {
   'id': 1352,
   'firstName': 'Michael',
   'lastName': 'Smooth',
   'age': 54
 },
 {
   'id': 1379,
   'firstName': 'Gabriela',
   'lastName': 'Division',
   'age': 65
 },
 {
   'id': 1406,
   'firstName': 'Dwany',
   'lastName': 'Wadson',
   'age': 76
 },
 {
   'id': 1433,
   'firstName': 'Jimmy ',
   'lastName': 'Chu',
   'age': 45
 },
 {
   'id': 1460,
   'firstName': 'Miguel',
   'lastName': 'Rodriguez',
   'age': 65
 },
 {
   'id': 1487,
   'firstName': 'Maggie',
   'lastName': 'Brasil',
   'age': 56
 },
 {
   'id': 1514,
   'firstName': 'Melissa ',
   'lastName': 'Oneal',
   'age': 77
 },
 {
   'id': 1541,
   'firstName': 'Juan',
   'lastName': 'Juanes',
   'age': 42
 },
 {
   'id': 1568,
   'firstName': 'Enso',
   'lastName': 'Feretti',
   'age': 53
 },
 {
   'id': 1595,
   'firstName': 'Edwardo',
   'lastName': 'Jimenez',
   'age': 29
 },
 {
   'id': 1622,
   'firstName': 'Gustavo',
   'lastName': 'Chops',
   'age': 37
 }
]

export const ALERT_RULES_LIST: any[] =
  [
    {
      id: 1001,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1001,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1001,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1001,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1001,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1001,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1001,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1001,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1028,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1028,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1028,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1028,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1028,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1028,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1028,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1028,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1055,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1055,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1055,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1055,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1055,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1055,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1055,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1055,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1109,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1109,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1109,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1109,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1109,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1109,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1109,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1109,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1136,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1136,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1136,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1136,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1136,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1136,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1136,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1190,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1190,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1190,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1190,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1190,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1190,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1190,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1190,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1217,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1217,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1217,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1217,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1217,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1217,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1217,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1217,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1244,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1244,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1244,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1244,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1244,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.UPPER
    },
    {
      id: 1244,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1244,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1244,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1271,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1271,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1271,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1271,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1271,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1271,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1271,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1271,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1298,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1298,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1298,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1298,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1298,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1298,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1298,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1298,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1325,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1325,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1325,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1325,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1325,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1352,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1352,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1352,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1352,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1352,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1352,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1352,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1352,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1379,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1379,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1379,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1379,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1379,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1379,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1379,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1379,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    
    
    {
      id: 1406,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1406,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1406,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1406,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1406,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1406,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1406,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1406,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1433,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1433,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1433,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1433,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1433,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1433,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1433,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1433,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    
    {
      id: 1460,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1460,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1460,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1460,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1460,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1460,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1460,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1460,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    
    {
      id: 1487,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1487,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1487,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1487,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1487,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1487,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1487,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1487,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },


    {
      id: 1514,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1514,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1514,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1514,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1514,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1514,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1514,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1514,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1541,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1541,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1541,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1541,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1541,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1541,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1541,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1541,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1568,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1568,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1568,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1568,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1568,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1568,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1568,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1568,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1595,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1595,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1595,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1595,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1595,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1595,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1595,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1595,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },

    {
      id: 1622,
      parameter: 'weight',
      parameterLabel: 'Weight',
      MIN_VAL: 90,
      MAX_VAL: 220,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1622,
      parameter: 'systolic-blood-pressure',
      parameterLabel: 'Systolic Blood Pressure',
      MIN_VAL: 90,
      MAX_VAL: 128,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1622,
      parameter: 'diastolic-blood-pressure',
      parameterLabel: 'Diastolic Blood Pressure',
      MIN_VAL: 60,
      MAX_VAL: 90,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1622,
      parameter: 'pulse',
      parameterLabel: 'Heart Rate',
      MIN_VAL: 85,
      MAX_VAL: 100,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1622,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 100,
      MAX_VAL: 104,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1622,
      parameter: 'temp',
      parameterLabel: 'Temperature',
      MIN_VAL: 94,
      MAX_VAL: 92,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    },
    {
      id: 1622,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 55,
      MAX_VAL: 65,
      max_severity: 'Critical',
      min_severity: 'Warning'
    },
    {
      id: 1622,
      parameter: 'respiratoryRate',
      parameterLabel: 'Respiratory Rate',
      MIN_VAL: 13,
      MAX_VAL: 7,
      max_severity: 'Critical',
      min_severity: 'Warning',
      spectrumEvaluationDirection: spectrumEvaluationDirection.LOWER
    }

    
  ];
  
export const Vitals: VitalDetails[] = [
 {
   'id': 1001,
   'dateTime': '05/02/19 14:53',
   'systolic': 118,
   'diastolic': 60,
   'weight': 180,
   'temp': 101,
   'respiratoryRate': 11,
   'pulse': 99,
   'sp02': 95
 },
 {
   'id': 1028,
   'dateTime': '05/03/19 8:38',
   'systolic': 120,
   'diastolic': 75,
   'weight': 175,
   'temp': 98.6,
   'respiratoryRate': 22,
   'pulse': 91,
   'sp02': 101
 },
 {
   'id': 1055,
   'dateTime': '05/03/19 19:12',
   'systolic': 138,
   'diastolic': 87,
   'weight': 286,
   'temp': 97.3,
   'respiratoryRate': 16,
   'pulse': 67,
   'sp02': 96
 },
 {
   'id': 1082,
   'dateTime': '05/04/19 3:21',
   'systolic': 115,
   'diastolic': 65,
   'weight': 135,
   'temp': 98.6,
   'respiratoryRate': 12,
   'pulse': 87,
   'sp02': 101
 },
 {
   'id': 1109,
   'dateTime': '05/04/19 22:33',
   'systolic': 110,
   'diastolic': 48,
   'weight': 108,
   'temp': 105.8,
   'respiratoryRate': 17,
   'pulse': 61,
   'sp02': 95
 },
 {
   'id': 1136,
   'dateTime': '05/05/19 8:53',
   'systolic': 112,
   'diastolic': 52,
   'weight': 98,
   'temp': 98.6,
   'respiratoryRate': 14,
   'pulse': 74,
   'sp02': 98
 },
 {
   'id': 1163,
   'dateTime': '05/06/19 0:43',
   'systolic': 122,
   'diastolic': 72,
   'weight': 165,
   'temp': 98.6,
   'respiratoryRate': 15,
   'pulse': 74,
   'sp02': 97
 },
 {
   'id': 1190,
   'dateTime': '05/06/19 4:48',
   'systolic': 130,
   'diastolic': 80,
   'weight': 110,
   'temp': 98.2,
   'respiratoryRate': 12,
   'pulse': 92,
   'sp02': 98
 },
 {
   'id': 1217,
   'dateTime': '05/06/19 16:05',
   'systolic': 145,
   'diastolic': 96,
   'weight': 265,
   'temp': 98.9,
   'respiratoryRate': 19,
   'pulse': 85,
   'sp02': 99
 },
 {
   'id': 1244,
   'dateTime': '05/07/19 9:07',
   'systolic': 114,
   'diastolic': 62,
   'weight': 105,
   'temp': 98.4,
   'respiratoryRate': 9,
   'pulse': 60,
   'sp02': 101
 },
 {
   'id': 1271,
   'dateTime': '05/07/19 20:24',
   'systolic': 123,
   'diastolic': 74,
   'weight': 96,
   'temp': 98.6,
   'respiratoryRate': 16,
   'pulse': 92,
   'sp02': 94
 },
 {
   'id': 1298,
   'dateTime': '05/08/19 15:36',
   'systolic': 110,
   'diastolic': 62,
   'weight': 225,
   'temp': 95.4,
   'respiratoryRate': 16,
   'pulse': 76,
   'sp02': 94
 },
 {
   'id': 1325,
   'dateTime': '05/08/19 23:02',
   'systolic': 115,
   'diastolic': 74,
   'weight': 185,
   'temp': 98.6,
   'respiratoryRate': 14,
   'pulse': 92,
   'sp02': 95
 },
 {
   'id': 1352,
   'dateTime': '05/09/19 9:07',
   'systolic': 125,
   'diastolic': 78,
   'weight': 164,
   'temp': 96,
   'respiratoryRate': 19,
   'pulse': 88,
   'sp02': 95
 },
 {
   'id': 1379,
   'dateTime': '05/09/19 18:57',
   'systolic': 105,
   'diastolic': 56,
   'weight': 108,
   'temp': 98.6,
   'respiratoryRate': 12,
   'pulse': 98,
   'sp02': 98
 },
 {
   'id': 1406,
   'dateTime': '05/09/19 20:09',
   'systolic': 167,
   'diastolic': 88,
   'weight': 235,
   'temp': 98.6,
   'respiratoryRate': 13,
   'pulse': 96,
   'sp02': 98
 },
 {
   'id': 1433,
   'dateTime': '05/09/19 23:45',
   'systolic': 128,
   'diastolic': 79,
   'weight': 139,
   'temp': 98.6,
   'respiratoryRate': 17,
   'pulse': 97,
   'sp02': 97
 },
 {
   'id': 1460,
   'dateTime': '05/10/19 9:36',
   'systolic': 120,
   'diastolic': 75,
   'weight': 164,
   'temp': 102.5,
   'respiratoryRate': 25,
   'pulse': 72,
   'sp02': 96
 },
 {
   'id': 1487,
   'dateTime': '05/11/19 0:00',
   'systolic': 116,
   'diastolic': 58,
   'weight': 102,
   'temp': 98.6,
   'respiratoryRate': 11,
   'pulse': 78,
   'sp02': 98
 },
 {
   'id': 1514,
   'dateTime': '05/11/19 18:00',
   'systolic': 182,
   'diastolic': 122,
   'weight': 289,
   'temp': 99.4,
   'respiratoryRate': 26,
   'pulse': 82,
   'sp02': 94
 },
 {
   'id': 1541,
   'dateTime': '05/12/19 13:12',
   'systolic': 165,
   'diastolic': 102,
   'weight': 194,
   'temp': 97.4,
   'respiratoryRate': 14,
   'pulse': 96,
   'sp02': 99
 },
 {
   'id': 1568,
   'dateTime': '05/13/19 6:00',
   'systolic': 113,
   'diastolic': 67,
   'weight': 111,
   'temp': 98.6,
   'respiratoryRate': 17,
   'pulse': 62,
   'sp02': 97
 },
 {
   'id': 1595,
   'dateTime': '05/13/19 6:29',
   'systolic': 114,
   'diastolic': 72,
   'weight': 123,
   'temp': 98.6,
   'respiratoryRate': 13,
   'pulse': 76,
   'sp02': 101
 },
 {
   'id': 1622,
   'dateTime': '05/13/19 9:21',
   'systolic': 180,
   'diastolic': 120,
   'weight': 295,
   'temp': 99.8,
   'respiratoryRate': 27,
   'pulse': 69,
   'sp02': 95
 },
 {
   'id': 1001,
   'dateTime': '05/12/19 15:53',
   'systolic': 123,
   'diastolic': 65,
   'weight': 228,
   'temp': 99.1,
   'respiratoryRate': 19,
   'pulse': 94,
   'sp02': 97
 },
 {
   'id': 1028,
   'dateTime': '05/13/19 2:55',
   'systolic': 125,
   'diastolic': 80,
   'weight': 178,
   'temp': 99.1,
   'respiratoryRate': 26,
   'pulse': 77,
   'sp02': 95
 },
 {
   'id': 1055,
   'dateTime': '05/13/19 5:33',
   'systolic': 143,
   'diastolic': 92,
   'weight': 289,
   'temp': 97.8,
   'respiratoryRate': 20,
   'pulse': 70,
   'sp02': 95
 },
 {
   'id': 1082,
   'dateTime': '05/13/19 19:57',
   'systolic': 120,
   'diastolic': 70,
   'weight': 138,
   'temp': 99.1,
   'respiratoryRate': 16,
   'pulse': 60,
   'sp02': 94
 },
 {
   'id': 1109,
   'dateTime': '05/13/19 21:38',
   'systolic': 115,
   'diastolic': 53,
   'weight': 111,
   'temp': 106.3,
   'respiratoryRate': 21,
   'pulse': 94,
   'sp02': 96
 },
 {
   'id': 1136,
   'dateTime': '05/14/19 10:21',
   'systolic': 117,
   'diastolic': 57,
   'weight': 101,
   'temp': 99.1,
   'respiratoryRate': 18,
   'pulse': 80,
   'sp02': 96
 },
 {
   'id': 1163,
   'dateTime': '05/14/19 19:14',
   'systolic': 127,
   'diastolic': 77,
   'weight': 168,
   'temp': 99.1,
   'respiratoryRate': 19,
   'pulse': 92,
   'sp02': 99
 },
 {
   'id': 1190,
   'dateTime': '05/15/19 3:09',
   'systolic': 135,
   'diastolic': 85,
   'weight': 113,
   'temp': 98.7,
   'respiratoryRate': 16,
   'pulse': 77,
   'sp02': 94
 },
 {
   'id': 1217,
   'dateTime': '05/15/19 7:00',
   'systolic': 150,
   'diastolic': 101,
   'weight': 268,
   'temp': 99.4,
   'respiratoryRate': 23,
   'pulse': 97,
   'sp02': 98
 },
 {
   'id': 1244,
   'dateTime': '05/15/19 20:41',
   'systolic': 119,
   'diastolic': 67,
   'weight': 108,
   'temp': 98.9,
   'respiratoryRate': 13,
   'pulse': 84,
   'sp02': 95
 },
 {
   'id': 1271,
   'dateTime': '05/16/19 3:09',
   'systolic': 128,
   'diastolic': 79,
   'weight': 99,
   'temp': 99.1,
   'respiratoryRate': 20,
   'pulse': 83,
   'sp02': 94
 },
 {
   'id': 1298,
   'dateTime': '05/16/19 6:17',
   'systolic': 115,
   'diastolic': 67,
   'weight': 228,
   'temp': 95.9,
   'respiratoryRate': 20,
   'pulse': 77,
   'sp02': 95
 },
 {
   'id': 1325,
   'dateTime': '05/16/19 10:21',
   'systolic': 120,
   'diastolic': 79,
   'weight': 188,
   'temp': 99.1,
   'respiratoryRate': 18,
   'pulse': 99,
   'sp02': 98
 },
 {
   'id': 1352,
   'dateTime': '05/17/19 0:17',
   'systolic': 130,
   'diastolic': 83,
   'weight': 167,
   'temp': 96.5,
   'respiratoryRate': 23,
   'pulse': 73,
   'sp02': 100
 },
 {
   'id': 1379,
   'dateTime': '05/17/19 17:48',
   'systolic': 110,
   'diastolic': 61,
   'weight': 111,
   'temp': 99.1,
   'respiratoryRate': 16,
   'pulse': 64,
   'sp02': 99
 },
 {
   'id': 1406,
   'dateTime': '05/18/19 7:29',
   'systolic': 172,
   'diastolic': 93,
   'weight': 238,
   'temp': 99.1,
   'respiratoryRate': 17,
   'pulse': 89,
   'sp02': 97
 },
 {
   'id': 1433,
   'dateTime': '05/18/19 17:33',
   'systolic': 133,
   'diastolic': 84,
   'weight': 142,
   'temp': 99.1,
   'respiratoryRate': 21,
   'pulse': 97,
   'sp02': 97
 },
 {
   'id': 1460,
   'dateTime': '05/19/19 7:43',
   'systolic': 125,
   'diastolic': 80,
   'weight': 167,
   'temp': 103,
   'respiratoryRate': 29,
   'pulse': 87,
   'sp02': 100
 },
 {
   'id': 1487,
   'dateTime': '05/19/19 13:00',
   'systolic': 121,
   'diastolic': 63,
   'weight': 105,
   'temp': 99.1,
   'respiratoryRate': 15,
   'pulse': 95,
   'sp02': 98
 },
 {
   'id': 1514,
   'dateTime': '05/19/19 19:00',
   'systolic': 187,
   'diastolic': 127,
   'weight': 292,
   'temp': 99.9,
   'respiratoryRate': 30,
   'pulse': 83,
   'sp02': 94
 },
 {
   'id': 1541,
   'dateTime': '05/20/19 13:43',
   'systolic': 170,
   'diastolic': 107,
   'weight': 197,
   'temp': 97.9,
   'respiratoryRate': 18,
   'pulse': 81,
   'sp02': 96
 },
 {
   'id': 1568,
   'dateTime': '05/21/19 1:29',
   'systolic': 118,
   'diastolic': 72,
   'weight': 114,
   'temp': 99.1,
   'respiratoryRate': 21,
   'pulse': 99,
   'sp02': 94
 },
 {
   'id': 1595,
   'dateTime': '05/21/19 10:50',
   'systolic': 119,
   'diastolic': 77,
   'weight': 126,
   'temp': 99.1,
   'respiratoryRate': 17,
   'pulse': 86,
   'sp02': 101
 },
 {
   'id': 1622,
   'dateTime': '05/22/19 3:38',
   'systolic': 185,
   'diastolic': 125,
   'weight': 298,
   'temp': 100.3,
   'respiratoryRate': 31,
   'pulse': 96,
   'sp02': 100
 },
  {
   'id': 1001,
   'dateTime': '05/24/19 18:58',
   'systolic': 112,
   'diastolic': 54,
   'weight': 218,
   'temp': 98.3,
   'respiratoryRate': 7,
   'pulse': 65,
   'sp02': 94
 },
 {
   'id': 1028,
   'dateTime': '05/24/19 23:31',
   'systolic': 114,
   'diastolic': 69,
   'weight': 168,
   'temp': 98.3,
   'respiratoryRate': 14,
   'pulse': 99,
   'sp02': 95
 },
 {
   'id': 1055,
   'dateTime': '05/25/19 16:48',
   'systolic': 132,
   'diastolic': 81,
   'weight': 279,
   'temp': 97,
   'respiratoryRate': 8,
   'pulse': 75,
   'sp02': 99
 },
 {
   'id': 1082,
   'dateTime': '05/26/19 0:14',
   'systolic': 109,
   'diastolic': 59,
   'weight': 128,
   'temp': 98.3,
   'respiratoryRate': 4,
   'pulse': 80,
   'sp02': 101
 },
 {
   'id': 1109,
   'dateTime': '05/26/19 2:24',
   'systolic': 104,
   'diastolic': 42,
   'weight': 101,
   'temp': 105.5,
   'respiratoryRate': 9,
   'pulse': 66,
   'sp02': 99
 },
 {
   'id': 1136,
   'dateTime': '05/26/19 20:53',
   'systolic': 106,
   'diastolic': 46,
   'weight': 91,
   'temp': 98.3,
   'respiratoryRate': 6,
   'pulse': 73,
   'sp02': 97
 },
 {
   'id': 1163,
   'dateTime': '05/27/19 3:07',
   'systolic': 116,
   'diastolic': 66,
   'weight': 158,
   'temp': 98.3,
   'respiratoryRate': 7,
   'pulse': 98,
   'sp02': 98
 },
 {
   'id': 1190,
   'dateTime': '05/27/19 18:00',
   'systolic': 124,
   'diastolic': 74,
   'weight': 103,
   'temp': 97.9,
   'respiratoryRate': 4,
   'pulse': 89,
   'sp02': 95
 },
 {
   'id': 1217,
   'dateTime': '05/28/19 12:43',
   'systolic': 139,
   'diastolic': 90,
   'weight': 258,
   'temp': 98.6,
   'respiratoryRate': 11,
   'pulse': 75,
   'sp02': 95
 },
 {
   'id': 1244,
   'dateTime': '05/28/19 14:53',
   'systolic': 108,
   'diastolic': 56,
   'weight': 98,
   'temp': 98.1,
   'respiratoryRate': 1,
   'pulse': 97,
   'sp02': 101
 },
 {
   'id': 1271,
   'dateTime': '05/29/19 1:55',
   'systolic': 117,
   'diastolic': 68,
   'weight': 89,
   'temp': 98.3,
   'respiratoryRate': 8,
   'pulse': 64,
   'sp02': 100
 },
 {
   'id': 1298,
   'dateTime': '05/29/19 5:31',
   'systolic': 104,
   'diastolic': 56,
   'weight': 218,
   'temp': 95.1,
   'respiratoryRate': 8,
   'pulse': 77,
   'sp02': 95
 },
 {
   'id': 1325,
   'dateTime': '05/29/19 19:41',
   'systolic': 109,
   'diastolic': 68,
   'weight': 178,
   'temp': 98.3,
   'respiratoryRate': 6,
   'pulse': 61,
   'sp02': 94
 },
 {
   'id': 1352,
   'dateTime': '05/29/19 21:36',
   'systolic': 119,
   'diastolic': 72,
   'weight': 157,
   'temp': 95.7,
   'respiratoryRate': 11,
   'pulse': 94,
   'sp02': 94
 },
 {
   'id': 1379,
   'dateTime': '05/30/19 9:22',
   'systolic': 99,
   'diastolic': 50,
   'weight': 101,
   'temp': 98.3,
   'respiratoryRate': 4,
   'pulse': 88,
   'sp02': 95
 },
 {
   'id': 1406,
   'dateTime': '05/30/19 23:17',
   'systolic': 161,
   'diastolic': 82,
   'weight': 228,
   'temp': 98.3,
   'respiratoryRate': 5,
   'pulse': 78,
   'sp02': 99
 },
 {
   'id': 1433,
   'dateTime': '05/31/19 3:22',
   'systolic': 122,
   'diastolic': 73,
   'weight': 132,
   'temp': 98.3,
   'respiratoryRate': 9,
   'pulse': 61,
   'sp02': 100
 },
 {
   'id': 1460,
   'dateTime': '05/31/19 22:19',
   'systolic': 114,
   'diastolic': 69,
   'weight': 157,
   'temp': 102.2,
   'respiratoryRate': 17,
   'pulse': 66,
   'sp02': 99
 },
 {
   'id': 1487,
   'dateTime': '06/01/19 9:07',
   'systolic': 110,
   'diastolic': 52,
   'weight': 95,
   'temp': 98.3,
   'respiratoryRate': 3,
   'pulse': 95,
   'sp02': 100
 },
 {
   'id': 1514,
   'dateTime': '06/01/19 19:26',
   'systolic': 176,
   'diastolic': 116,
   'weight': 282,
   'temp': 99.1,
   'respiratoryRate': 18,
   'pulse': 94,
   'sp02': 99
 },
 {
   'id': 1541,
   'dateTime': '06/02/19 1:55',
   'systolic': 159,
   'diastolic': 96,
   'weight': 187,
   'temp': 97.1,
   'respiratoryRate': 6,
   'pulse': 82,
   'sp02': 96
 },
 {
   'id': 1568,
   'dateTime': '06/02/19 15:36',
   'systolic': 107,
   'diastolic': 61,
   'weight': 104,
   'temp': 98.3,
   'respiratoryRate': 9,
   'pulse': 90,
   'sp02': 100
 },
 {
   'id': 1595,
   'dateTime': '06/03/19 3:50',
   'systolic': 108,
   'diastolic': 66,
   'weight': 116,
   'temp': 98.3,
   'respiratoryRate': 5,
   'pulse': 99,
   'sp02': 100
 },
 {
   'id': 1622,
   'dateTime': '06/03/19 16:48',
   'systolic': 174,
   'diastolic': 114,
   'weight': 288,
   'temp': 99.5,
   'respiratoryRate': 19,
   'pulse': 76,
   'sp02': 97
 },
  {
   'id': 1001,
   'dateTime': '06/04/19 22:14',
   'systolic': 126,
   'diastolic': 68,
   'weight': 230,
   'temp': 99.3,
   'respiratoryRate': 22,
   'pulse': 77,
    'sp02': 97
},
 {
   'id': 1028,
   'dateTime': '06/05/19 13:35',
   'systolic': 128,
   'diastolic': 83,
   'weight': 180,
   'temp': 99.3,
   'respiratoryRate': 29,
   'pulse': 77,
   'sp02': 97
 },
 {
   'id': 1055,
   'dateTime': '06/05/19 23:54',
   'systolic': 146,
   'diastolic': 95,
   'weight': 291,
   'temp': 98,
   'respiratoryRate': 23,
   'pulse': 100,
   'sp02': 97
 },
 {
   'id': 1082,
   'dateTime': '06/06/19 8:47',
   'systolic': 123,
   'diastolic': 73,
   'weight': 140,
   'temp': 99.3,
   'respiratoryRate': 19,
   'pulse': 76,
   'sp02': 97

 },
 {
   'id': 1109,
   'dateTime': '06/06/19 16:57',
   'systolic': 118,
   'diastolic': 56,
   'weight': 113,
   'temp': 106.5,
   'respiratoryRate': 24,
   'pulse': 60,
   'sp02': 97
 },
 {
   'id': 1136,
   'dateTime': '06/06/19 19:21',
   'systolic': 120,
   'diastolic': 60,
   'weight': 103,
   'temp': 99.3,
   'respiratoryRate': 21,
   'pulse': 73,
    'sp02': 97
},
 {
   'id': 1163,
   'dateTime': '06/07/19 7:21',
   'systolic': 130,
   'diastolic': 80,
   'weight': 170,
   'temp': 99.3,
   'respiratoryRate': 22,
   'pulse': 99,
   'sp02': 97
 },
 {
   'id': 1190,
   'dateTime': '06/07/19 20:18',
   'systolic': 138,
   'diastolic': 88,
   'weight': 115,
   'temp': 98.9,
   'respiratoryRate': 19,
   'pulse': 67,
   'sp02': 97
 },
 {
   'id': 1217,
   'dateTime': '06/08/19 9:16',
   'systolic': 153,
   'diastolic': 104,
   'weight': 270,
   'temp': 99.6,
   'respiratoryRate': 26,
   'pulse': 67,
    'sp02': 97
},
 {
   'id': 1244,
   'dateTime': '06/08/19 15:16',
   'systolic': 122,
   'diastolic': 70,
   'weight': 110,
   'temp': 99.1,
   'respiratoryRate': 16,
   'pulse': 93,
   'sp02': 97
 },
 {
   'id': 1271,
   'dateTime': '06/08/19 21:30',
   'systolic': 131,
   'diastolic': 82,
   'weight': 101,
   'temp': 99.3,
   'respiratoryRate': 23,
   'pulse': 72,
   'sp02': 97
 },
 {
   'id': 1298,
   'dateTime': '06/09/19 5:40',
   'systolic': 118,
   'diastolic': 70,
   'weight': 230,
   'temp': 96.1,
   'respiratoryRate': 23,
   'pulse': 89,
   'sp02': 97
 },
 {
   'id': 1325,
   'dateTime': '06/09/19 21:30',
   'systolic': 123,
   'diastolic': 82,
   'weight': 190,
   'temp': 99.3,
   'respiratoryRate': 21,
   'pulse': 76,
   'sp02': 97
 },
 {
   'id': 1352,
   'dateTime': '06/10/19 12:23',
   'systolic': 133,
   'diastolic': 86,
   'weight': 169,
   'temp': 96.7,
   'respiratoryRate': 26,
   'pulse': 89,
   'sp02': 97
 },
 {
   'id': 1379,
   'dateTime': '06/10/19 13:50',
   'systolic': 113,
   'diastolic': 64,
   'weight': 113,
   'temp': 99.3,
   'respiratoryRate': 19,
   'pulse': 64,
   'sp02': 97
 },
 {
   'id': 1406,
   'dateTime': '06/10/19 22:28',
   'systolic': 175,
   'diastolic': 96,
   'weight': 240,
   'temp': 99.3,
   'respiratoryRate': 20,
   'pulse': 91,
   'sp02': 97
 },
 {
   'id': 1433,
   'dateTime': '06/11/19 15:59',
   'systolic': 136,
   'diastolic': 87,
   'weight': 144,
   'temp': 99.3,
   'respiratoryRate': 24,
   'pulse': 64,
   'sp02': 97
 },
 {
   'id': 1460,
   'dateTime': '06/12/19 9:45',
   'systolic': 128,
   'diastolic': 83,
   'weight': 169,
   'temp': 103.2,
   'respiratoryRate': 32,
   'pulse': 71,
   'sp02': 97
 },
 {
   'id': 1487,
   'dateTime': '06/12/19 12:38',
   'systolic': 124,
   'diastolic': 66,
   'weight': 107,
   'temp': 99.3,
   'respiratoryRate': 18,
   'sp02': 97,
   'pulse': 91
 },
 {
   'id': 1514,
   'dateTime': '06/13/19 6:38',
   'systolic': 190,
   'diastolic': 130,
   'weight': 294,
   'temp': 100.1,
   'respiratoryRate': 33,
   'pulse': 76,
   'sp02': 97
 },
 {
   'id': 1541,
   'dateTime': '06/13/19 11:54',
   'systolic': 173,
   'diastolic': 110,
   'weight': 199,
   'temp': 98.1,
   'respiratoryRate': 21,
   'pulse': 74,
   'sp02': 97
 },
 {
   'id': 1568,
   'dateTime': '06/14/19 6:09',
   'systolic': 121,
   'diastolic': 75,
   'weight': 116,
   'temp': 99.3,
   'respiratoryRate': 24,
   'pulse': 71,
   'sp02': 97
 },
 {
   'id': 1595,
   'dateTime': '06/14/19 12:38',
   'systolic': 122,
   'diastolic': 80,
   'weight': 128,
   'temp': 99.3,
   'respiratoryRate': 20,
   'pulse': 97,
   'sp02': 97
 },
 {
   'id': 1622,
   'dateTime': '06/15/19 0:38',
   'systolic': 188,
   'diastolic': 128,
   'weight': 300,
   'temp': 100.5,
   'respiratoryRate': 34,
   'pulse': 90,
   'sp02': 97
 }
]
