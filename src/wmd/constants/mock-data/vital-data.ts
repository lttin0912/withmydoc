import { RecordValueType } from 'src/wmd/models/record.model';

export const MOCK_VITALS_RESPONSE: any[] = [{
    id: '38ecbe5d-fa15-4d14-b88e-5dee21a1af96',
    recordType: 'record.bloodPressure',
    timestamp: new Date('2020-04-02T03:42:00-04:00'),
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '15.99864',
        type: RecordValueType.NUMBER,
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.065726',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '86',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '5',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '899f726708a7c205bc901b79fd9958ed',
    deviceUuid: '59c345b4-c3a5-4d99-9586-78410c303262',
    deviceType: 'IHEALTH'
  },
  {
    id: '5c063939-5f97-44dd-83bc-2031f79e7c26',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-03T10:47:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '16.131962',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '12.398946',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '83',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '3',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '3f7eb39cd44083fe57ae0e613e142f55',
    deviceUuid: '59c345b4-c3a5-4d99-9586-78410c303262',
    deviceType: 'IHEALTH'
  },
  {
    id: '5bfb7b72-72e9-430b-8dc9-612e69d6d0e1',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-03T10:48:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '15.865318',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.599014',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '79',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '4',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: 'bf5d504208283b2ebe03533b55ace99c',
    deviceUuid: '59c345b4-c3a5-4d99-9586-78410c303262',
    deviceType: 'IHEALTH'
  },
  {
    id: 'f7458618-1839-4c23-8f57-eed1d35cc1ee',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-07T10:14:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '16.131962',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '10.799082',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '83',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '5',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '1b36ed3020debac0cc559f974e01121a',
    deviceUuid: '59c345b4-c3a5-4d99-9586-78410c303262',
    deviceType: 'IHEALTH'
  },
  {
    id: '98b524fc-ff08-4463-ae26-0f2d9dcd1a33',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-14T07:52:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '15.065386',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.465692',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '74',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '4',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: 'f1fc4180c3ad6bbf51b62778852c599e',
    deviceUuid: '59c345b4-c3a5-4d99-9586-78410c303262',
    deviceType: 'IHEALTH'
  },
  {
    id: '7e1229e6-a08c-4e4d-92c7-fc743c7cc809',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-14T07:53:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '15.465352',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.199048',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '71',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '5',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: 'c418cb83e50f573af4ce68b5f32cdc10',
    deviceUuid: '59c345b4-c3a5-4d99-9586-78410c303262',
    deviceType: 'IHEALTH'
  },
  {
    id: '44d7deb4-38ee-47c2-b8c6-09f0a8ad59c6',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-15T04:49:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '15.865318',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '10.932404',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '82',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '5',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '16d23520297f2a0cc3c28be2339b2ff8',
    deviceUuid: '59c345b4-c3a5-4d99-9586-78410c303262',
    deviceType: 'IHEALTH'
  },
  {
    id: '5c06ffdf-0a6f-42ba-b38a-5dcc70b2b551',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-20T04:08:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '14.798742',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.199048',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '88',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '5',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: 'a90b1f8bc25d0d5ce856ca66802f3585',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  },
  {
    id: '9faae556-d39c-40e2-b7d9-e543c1ed6b35',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-21T12:35:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '14.398776',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.465692',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '77',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '4',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '56b8c8ac6c625bf680c68607165599d5',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  },
  {
    id: 'a94c65ed-a82c-4c13-8ccc-fcd8bbe62586',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-22T04:54:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '16.398606',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '10.265794',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '81',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '5',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '3c4a930ca517362a4992e4b404ff6ec4',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  },
  {
    id: 'd65b517d-2bbf-4d04-bfb0-757cfa8f6cf6',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-22T11:30:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '17.33186',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '16.131962',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '88',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '1',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '3df7259e68e3e5591843cdd4076e962d',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  },
  {
    id: 'feb6e57c-2972-4634-afc5-890a9aeb913b',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-22T11:32:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '14.66542',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '12.265624',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '86',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '3',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '824fa4ab23e3c73de1bd865c871ebc9a',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  },
  {
    id: '9ccb9760-6f86-4a9a-8d9e-27e2a9edf0b4',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-23T05:21:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '18.131792',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.465692',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '86',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '4',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '4053a8bd2bfc759c4aa53e6701e577bd',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  },
  {
    id: '4cb0d4cb-9665-47ef-87e5-c17034595bab',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-24T10:33:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '15.598674',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '10.399116',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '89',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '6',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: 'e33179680f31b8b5a298973bc84f48b0',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  },
  {
    id: '80ddfbe3-1152-4c51-9e23-e05618c64c1d',
    recordType: 'record.bloodPressure',
    timestamp: '2020-04-26T10:00:00-04:00',
    values: [
      {
        input: 'input.bloodPressure.systolic',
        value: '15.865318',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '23'
      },
      {
        input: 'input.bloodPressure.diastolic',
        value: '11.199048',
        type: 'NUMBER',
        unit: 'kPa',
        primary: true,
        order: '24'
      },
      {
        input: 'input.heartrate.value',
        value: '77',
        type: 'NUMBER',
        unit: 'bpm',
        primary: true,
        order: '15'
      },
      {
        input: 'input.bloodPressure.level',
        value: '5',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.arrhythmia',
        value: '0',
        type: 'NUMBER',
        unit: null,
        primary: false,
        order: null
      },
      {
        input: 'input.bloodPressure.notes',
        value: '',
        type: 'TEXT',
        unit: null,
        primary: null,
        order: null
      }
    ],
    originId: '9cd8df933466fc1b144dc130693ff7fb',
    deviceUuid: '2cf1cfb8-fbba-4a56-afbe-1e45a14043bc',
    deviceType: 'IHEALTH'
  }
];
