const fz = require('../zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('../zigbee-herdsman-converters/converters/toZigbee');
const exposes = require(../'zigbee-herdsman-converters/lib/exposes');
const reporting = require(../'zigbee-herdsman-converters/lib/reporting');
const extend = require('../zigbee-herdsman-converters/lib/extend');

const e = exposes.presets;
const ea = exposes.access;

module.exports = [
    {
        zigbeeModel: ['ITCMDR_Contact'],
        model: 'ITCMDR_Contact',
        vendor: 'sumju.net',
        description: 'Contact Sensor by IT Commander',
        fromZigbee: ['fz.contact'],
        toZigbee: [],
        exposes: [e.battery(), e.contact()]
    },
    {
        zigbeeModel: ['ITCMDR_Click'],
        model: 'ITCMDR_Click',
        vendor: 'sumju.net',
        description: 'button by IT Commander',
        fromZigbee: [fz.ignore_basic_report, fz.ptvo_multistate_action,],
        toZigbee: [],
        exposes: [e.action(['single', 'double', 'triple', 'hold', 'release']),e.battery(),]
    },
]
