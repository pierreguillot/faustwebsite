
/*
Code generated with Faust version 2.4.4
Compilation options: -scal -ftz 2
*/

function getJSONSRandomFrequencyGenerator() {
	return "{\"name\":\"Random Frequency Generator\",\"version\":\"2.4.4\",\"options\":\"-scal -ftz 2\",\"size\":\"212\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Frequency Generator\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Frequency Generator\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Random_Frequency_Generator/Instrument_Hand\",\"index\":\"116\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"8\",\"min\":\"0\",\"max\":\"15\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Random_Frequency_Generator/Hight\",\"index\":\"176\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"frequency range hight factor\"}],\"init\":\"1000\",\"min\":\"300\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/Random_Frequency_Generator/Speed\",\"index\":\"88\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"420\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"}]}]}";
}
function getBinaryCodeSRandomFrequencyGenerator() {
	return new Uint8Array([ 0,0x61,0x73,0x6d,0x1,0,0,0,0x1,0xd5,0x80,0x80,0x80,0,0x10,0x60,0x2,0x7f,0x7f,0,0x60,0x4,0x7f,0x7f,0x7f,0x7f,0,0x60,0x1,0x7d,0x1,0x7d,0x60,0x1,0x7f,0x1,0x7f,0x60,0x1,0x7f,0x1,0x7f,0x60,0x2,0x7f,0x7f,0x1,0x7d,0x60,0x1,0x7f,0x1,0x7f,0x60,0x2,0x7f,0x7f,0,0x60,0x1,0x7f,0,0x60,0x2,0x7f,0x7f,0,0x60,0x2,0x7f,0x7f,0,0x60,0x1,0x7f,0,0x60,0x2,0x7f,0x7f,0x1,0x7f,0x60,0x2,0x7f,0x7f,0x1,0x7f,0x60,0x3,0x7f,0x7f,0x7d,0,0x60,0x1,0x7d,0x1,0x7d,0x2,0xa5,0x80,0x80,0x80,0,0x2,0xb,0x67,0x6c,0x6f,0x62,0x61,0x6c,0x2e,0x4d,0x61,0x74,0x68,0x3,0x63,0x6f,0x73,0,0x2,0xb,0x67,0x6c,0x6f,0x62,0x61,0x6c,0x2e,0x4d,0x61,0x74,0x68,0x3,0x73,0x69,0x6e,0,0xf,0x3,0x8f,0x80,0x80,0x80,0,0xe,0,0x1,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0x5,0x87,0x80,0x80,0x80,0,0x1,0,0x81,0x80,0x80,0x80,0,0x7,0xba,0x81,0x80,0x80,0,0xc,0x7,0x63,0x6f,0x6d,0x70,0x75,0x74,0x65,0,0x3,0xc,0x67,0x65,0x74,0x4e,0x75,0x6d,0x49,0x6e,0x70,0x75,0x74,0x73,0,0x4,0xd,0x67,0x65,0x74,0x4e,0x75,0x6d,0x4f,0x75,0x74,0x70,0x75,0x74,0x73,0,0x5,0xd,0x67,0x65,0x74,0x50,0x61,0x72,0x61,0x6d,0x56,0x61,0x6c,0x75,0x65,0,0x6,0xd,0x67,0x65,0x74,0x53,0x61,0x6d,0x70,0x6c,0x65,0x52,0x61,0x74,0x65,0,0x7,0x4,0x69,0x6e,0x69,0x74,0,0x8,0xd,0x69,0x6e,0x73,0x74,0x61,0x6e,0x63,0x65,0x43,0x6c,0x65,0x61,0x72,0,0x9,0x11,0x69,0x6e,0x73,0x74,0x61,0x6e,0x63,0x65,0x43,0x6f,0x6e,0x73,0x74,0x61,0x6e,0x74,0x73,0,0xa,0xc,0x69,0x6e,0x73,0x74,0x61,0x6e,0x63,0x65,0x49,0x6e,0x69,0x74,0,0xb,0x1a,0x69,0x6e,0x73,0x74,0x61,0x6e,0x63,0x65,0x52,0x65,0x73,0x65,0x74,0x55,0x73,0x65,0x72,0x49,0x6e,0x74,0x65,0x72,0x66,0x61,0x63,0x65,0,0xc,0xd,0x73,0x65,0x74,0x50,0x61,0x72,0x61,0x6d,0x56,0x61,0x6c,0x75,0x65,0,0xf,0x6,0x6d,0x65,0x6d,0x6f,0x72,0x79,0x2,0,0xa,0x9c,0x90,0x80,0x80,0,0xe,0x82,0x80,0x80,0x80,0,0,0xb,0xfc,0x87,0x80,0x80,0,0x2,0x4,0x7f,0xd,0x7d,0x41,0,0x21,0x4,0x43,0,0,0,0,0x21,0x8,0x43,0,0,0,0,0x21,0x9,0x41,0,0x21,0x5,0x43,0,0,0,0,0x21,0xa,0x41,0,0x21,0x6,0x43,0,0,0,0,0x21,0xb,0x41,0,0x21,0x7,0x43,0,0,0,0,0x21,0xc,0x43,0,0,0,0,0x21,0xd,0x43,0,0,0,0,0x21,0xe,0x43,0,0,0,0,0x21,0xf,0x43,0,0,0,0,0x21,0x10,0x43,0,0,0,0,0x21,0x11,0x43,0,0,0,0,0x21,0x12,0x43,0,0,0,0,0x21,0x13,0x43,0,0,0,0,0x21,0x14,0x20,0x3,0x41,0,0x41,0x2,0x74,0x6a,0x28,0x2,0,0x21,0x4,0x43,0x6f,0x12,0x83,0x3a,0x41,0xd8,0,0x2a,0x2,0,0x94,0x21,0x8,0x41,0xf4,0,0x2a,0x2,0,0x21,0x9,0x20,0x9,0x43,0,0,0,0,0x5f,0x21,0x5,0x43,0x6f,0x12,0x83,0x3a,0x41,0xb0,0x1,0x2a,0x2,0,0x94,0x21,0xa,0x41,0,0x21,0x6,0x3,0x40,0x2,0x40,0x41,0,0x41,0x1,0x36,0x2,0,0x20,0x8,0x43,0x77,0xbe,0x7f,0x3f,0x41,0xe0,0,0x2a,0x2,0,0x94,0x92,0x21,0xb,0x41,0xdc,0,0x20,0xb,0x43,0,0,0,0,0x20,0xb,0xbc,0x41,0x80,0x80,0x80,0xfc,0x7,0x71,0x1b,0x38,0x2,0,0x41,0xe4,0,0x41,0x4,0x28,0x2,0,0x41,0xe8,0,0x28,0x2,0,0x6a,0x41,0xd4,0,0x2a,0x2,0,0x43,0,0,0x34,0x43,0x43,0,0,0x34,0x44,0x41,0xdc,0,0x2a,0x2,0,0x96,0x97,0xa8,0xb2,0x95,0xa8,0x6f,0x36,0x2,0,0x41,0xe4,0,0x28,0x2,0,0x41,0,0x46,0x21,0x7,0x41,0xec,0,0x20,0x7,0x36,0x2,0,0x41,0xf8,0,0x20,0x9,0x38,0x2,0,0x43,0,0,0,0,0x41,0x84,0x1,0x2a,0x2,0,0x20,0x9,0x41,0xfc,0,0x2a,0x2,0,0x93,0x8b,0x92,0x41,0xf0,0,0x28,0x2,0,0x1b,0x21,0xc,0x41,0x80,0x1,0x20,0xc,0x43,0,0,0,0,0x20,0xc,0xbc,0x41,0x80,0x80,0x80,0xfc,0x7,0x71,0x1b,0x38,0x2,0,0x41,0x88,0x1,0x20,0x7,0x41,0x8c,0x1,0x28,0x2,0,0x6a,0x41,0xf,0x6f,0x36,0x2,0,0x41,0x14,0x41,0x88,0x1,0x28,0x2,0,0x41,0xf,0x20,0x7,0x41,0x80,0x1,0x2a,0x2,0,0x43,0,0,0,0,0x5e,0x20,0x5,0x72,0x71,0x1b,0x41,0x2,0x74,0x6a,0x20,0x9,0x38,0x2,0,0x41,0x90,0x1,0x41,0x14,0x41,0x88,0x1,0x28,0x2,0,0x41,0x2,0x74,0x6a,0x2a,0x2,0,0x38,0x2,0,0x41,0x98,0x1,0x41,0x9c,0x1,0x28,0x2,0,0x41,0x1,0x6a,0x41,0x1,0x41,0x14,0x41,0x88,0x1,0x28,0x2,0,0x41,0x2,0x74,0x6a,0x2a,0x2,0,0x41,0x94,0x1,0x2a,0x2,0,0x93,0x8b,0x43,0,0,0,0,0x5e,0x6b,0x6c,0x36,0x2,0,0x41,0xa0,0x1,0x41,0xed,0x9c,0x99,0x8e,0x4,0x41,0xa4,0x1,0x28,0x2,0,0x6c,0x41,0xb9,0xe0,0,0x6a,0x36,0x2,0,0x43,0,0,0,0x30,0x41,0xa0,0x1,0x28,0x2,0,0xb2,0x94,0x41,0xac,0x1,0x2a,0x2,0,0x41,0x98,0x1,0x28,0x2,0,0x41,0,0x4c,0x1b,0x21,0xd,0x41,0xa8,0x1,0x20,0xd,0x43,0,0,0,0,0x20,0xd,0xbc,0x41,0x80,0x80,0x80,0xfc,0x7,0x71,0x1b,0x38,0x2,0,0x20,0xa,0x43,0x77,0xbe,0x7f,0x3f,0x41,0xb8,0x1,0x2a,0x2,0,0x94,0x92,0x21,0xe,0x41,0xb4,0x1,0x20,0xe,0x43,0,0,0,0,0x20,0xe,0xbc,0x41,0x80,0x80,0x80,0xfc,0x7,0x71,0x1b,0x38,0x2,0,0x43,0xa4,0x70,0x7d,0x3f,0x41,0xc0,0x1,0x2a,0x2,0,0x94,0x43,0xa,0xd7,0x23,0x3c,0x41,0xa8,0x1,0x2a,0x2,0,0x43,0,0,0x20,0x41,0x43,0,0x80,0xbb,0x44,0x41,0xb4,0x1,0x2a,0x2,0,0x96,0x97,0x94,0x94,0x92,0x21,0xf,0x41,0xbc,0x1,0x20,0xf,0x43,0,0,0,0,0x20,0xf,0xbc,0x41,0x80,0x80,0x80,0xfc,0x7,0x71,0x1b,0x38,0x2,0,0x41,0x10,0x2a,0x2,0,0x41,0xbc,0x1,0x2a,0x2,0,0x94,0x21,0x10,0x20,0x10,0x10,0x1,0x21,0x11,0x20,0x10,0x10,0,0x21,0x12,0x41,0xd0,0x1,0x2a,0x2,0,0x20,0x11,0x94,0x41,0xc8,0x1,0x2a,0x2,0,0x20,0x12,0x94,0x92,0x21,0x13,0x41,0xc4,0x1,0x20,0x13,0x43,0,0,0,0,0x20,0x13,0xbc,0x41,0x80,0x80,0x80,0xfc,0x7,0x71,0x1b,0x38,0x2,0,0x41,0xd0,0x1,0x2a,0x2,0,0x20,0x12,0x94,0x41,0xc8,0x1,0x2a,0x2,0,0x43,0,0,0,0,0x20,0x11,0x93,0x94,0x92,0x41,0x1,0x41,0x4,0x28,0x2,0,0x6b,0xb2,0x92,0x21,0x14,0x41,0xcc,0x1,0x20,0x14,0x43,0,0,0,0,0x20,0x14,0xbc,0x41,0x80,0x80,0x80,0xfc,0x7,0x71,0x1b,0x38,0x2,0,0x20,0x4,0x20,0x6,0x41,0x2,0x74,0x6a,0x41,0xc4,0x1,0x2a,0x2,0,0x38,0x2,0,0x41,0x4,0x41,0,0x28,0x2,0,0x36,0x2,0,0x41,0xe0,0,0x41,0xdc,0,0x2a,0x2,0,0x38,0x2,0,0x41,0xe8,0,0x41,0xe4,0,0x28,0x2,0,0x36,0x2,0,0x41,0xf0,0,0x41,0xec,0,0x28,0x2,0,0x36,0x2,0,0x41,0xfc,0,0x41,0xf8,0,0x2a,0x2,0,0x38,0x2,0,0x41,0x84,0x1,0x41,0x80,0x1,0x2a,0x2,0,0x38,0x2,0,0x41,0x8c,0x1,0x41,0x88,0x1,0x28,0x2,0,0x36,0x2,0,0x41,0x94,0x1,0x41,0x90,0x1,0x2a,0x2,0,0x38,0x2,0,0x41,0x9c,0x1,0x41,0x98,0x1,0x28,0x2,0,0x36,0x2,0,0x41,0xa4,0x1,0x41,0xa0,0x1,0x28,0x2,0,0x36,0x2,0,0x41,0xac,0x1,0x41,0xa8,0x1,0x2a,0x2,0,0x38,0x2,0,0x41,0xb8,0x1,0x41,0xb4,0x1,0x2a,0x2,0,0x38,0x2,0,0x41,0xc0,0x1,0x41,0xbc,0x1,0x2a,0x2,0,0x38,0x2,0,0x41,0xc8,0x1,0x41,0xc4,0x1,0x2a,0x2,0,0x38,0x2,0,0x41,0xd0,0x1,0x41,0xcc,0x1,0x2a,0x2,0,0x38,0x2,0,0x20,0x6,0x41,0x1,0x6a,0x21,0x6,0x20,0x6,0x20,0x1,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0xb,0x85,0x80,0x80,0x80,0,0,0x41,0,0xf,0xb,0x85,0x80,0x80,0x80,0,0,0x41,0x1,0xf,0xb,0x8b,0x80,0x80,0x80,0,0,0x20,0,0x20,0x1,0x6a,0x2a,0x2,0,0xf,0xb,0x88,0x80,0x80,0x80,0,0,0x41,0x8,0x28,0x2,0,0xf,0xb,0x8e,0x80,0x80,0x80,0,0,0x20,0,0x20,0x1,0x10,0x2,0x20,0,0x20,0x1,0x10,0xb,0xb,0xdf,0x85,0x80,0x80,0,0x1,0xf,0x7f,0x41,0,0x21,0x1,0x41,0,0x21,0x2,0x41,0,0x21,0x3,0x41,0,0x21,0x4,0x41,0,0x21,0x5,0x41,0,0x21,0x6,0x41,0,0x21,0x7,0x41,0,0x21,0x8,0x41,0,0x21,0x9,0x41,0,0x21,0xa,0x41,0,0x21,0xb,0x41,0,0x21,0xc,0x41,0,0x21,0xd,0x41,0,0x21,0xe,0x41,0,0x21,0xf,0x41,0,0x21,0x1,0x3,0x40,0x2,0x40,0x41,0,0x20,0x1,0x41,0x2,0x74,0x6a,0x41,0,0x36,0x2,0,0x20,0x1,0x41,0x1,0x6a,0x21,0x1,0x20,0x1,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x2,0x3,0x40,0x2,0x40,0x41,0xdc,0,0x20,0x2,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0x2,0x41,0x1,0x6a,0x21,0x2,0x20,0x2,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x3,0x3,0x40,0x2,0x40,0x41,0xe4,0,0x20,0x3,0x41,0x2,0x74,0x6a,0x41,0,0x36,0x2,0,0x20,0x3,0x41,0x1,0x6a,0x21,0x3,0x20,0x3,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x4,0x3,0x40,0x2,0x40,0x41,0xec,0,0x20,0x4,0x41,0x2,0x74,0x6a,0x41,0,0x36,0x2,0,0x20,0x4,0x41,0x1,0x6a,0x21,0x4,0x20,0x4,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x5,0x3,0x40,0x2,0x40,0x41,0xf8,0,0x20,0x5,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0x5,0x41,0x1,0x6a,0x21,0x5,0x20,0x5,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x6,0x3,0x40,0x2,0x40,0x41,0x80,0x1,0x20,0x6,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0x6,0x41,0x1,0x6a,0x21,0x6,0x20,0x6,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x7,0x3,0x40,0x2,0x40,0x41,0x88,0x1,0x20,0x7,0x41,0x2,0x74,0x6a,0x41,0,0x36,0x2,0,0x20,0x7,0x41,0x1,0x6a,0x21,0x7,0x20,0x7,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x8,0x3,0x40,0x2,0x40,0x41,0x90,0x1,0x20,0x8,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0x8,0x41,0x1,0x6a,0x21,0x8,0x20,0x8,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0x9,0x3,0x40,0x2,0x40,0x41,0x98,0x1,0x20,0x9,0x41,0x2,0x74,0x6a,0x41,0,0x36,0x2,0,0x20,0x9,0x41,0x1,0x6a,0x21,0x9,0x20,0x9,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0xa,0x3,0x40,0x2,0x40,0x41,0xa0,0x1,0x20,0xa,0x41,0x2,0x74,0x6a,0x41,0,0x36,0x2,0,0x20,0xa,0x41,0x1,0x6a,0x21,0xa,0x20,0xa,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0xb,0x3,0x40,0x2,0x40,0x41,0xa8,0x1,0x20,0xb,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0xb,0x41,0x1,0x6a,0x21,0xb,0x20,0xb,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0xc,0x3,0x40,0x2,0x40,0x41,0xb4,0x1,0x20,0xc,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0xc,0x41,0x1,0x6a,0x21,0xc,0x20,0xc,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0xd,0x3,0x40,0x2,0x40,0x41,0xbc,0x1,0x20,0xd,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0xd,0x41,0x1,0x6a,0x21,0xd,0x20,0xd,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0xe,0x3,0x40,0x2,0x40,0x41,0xc4,0x1,0x20,0xe,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0xe,0x41,0x1,0x6a,0x21,0xe,0x20,0xe,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0,0x21,0xf,0x3,0x40,0x2,0x40,0x41,0xcc,0x1,0x20,0xf,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0xf,0x41,0x1,0x6a,0x21,0xf,0x20,0xf,0x41,0x2,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0xb,0xf4,0x80,0x80,0x80,0,0x1,0x1,0x7f,0x41,0,0x21,0x2,0x41,0x8,0x20,0x1,0x36,0x2,0,0x41,0xc,0x43,0,0x80,0x3b,0x48,0x43,0,0,0x80,0x3f,0x41,0x8,0x28,0x2,0,0xb2,0x97,0x96,0x38,0x2,0,0x41,0x10,0x43,0xdb,0xf,0xc9,0x40,0x41,0xc,0x2a,0x2,0,0x95,0x38,0x2,0,0x41,0,0x21,0x2,0x3,0x40,0x2,0x40,0x41,0x14,0x20,0x2,0x41,0x2,0x74,0x6a,0x43,0,0,0,0,0x38,0x2,0,0x20,0x2,0x41,0x1,0x6a,0x21,0x2,0x20,0x2,0x41,0x10,0x48,0x4,0x40,0xc,0x2,0xc,0x1,0xb,0xb,0xb,0x41,0xd4,0,0x43,0,0,0x70,0x42,0x41,0xc,0x2a,0x2,0,0x94,0x38,0x2,0,0xb,0x90,0x80,0x80,0x80,0,0,0x20,0,0x20,0x1,0x10,0xa,0x20,0,0x10,0xc,0x20,0,0x10,0x9,0xb,0xa3,0x80,0x80,0x80,0,0,0x41,0xd8,0,0x43,0,0,0xd2,0x43,0x38,0x2,0,0x41,0xf4,0,0x43,0,0,0,0x41,0x38,0x2,0,0x41,0xb0,0x1,0x43,0,0,0x7a,0x44,0x38,0x2,0,0xb,0x8d,0x80,0x80,0x80,0,0,0x20,0x1,0x20,0,0x20,0,0x20,0x1,0x48,0x1b,0xf,0xb,0x8d,0x80,0x80,0x80,0,0,0x20,0,0x20,0x1,0x20,0,0x20,0x1,0x48,0x1b,0xf,0xb,0x8c,0x80,0x80,0x80,0,0,0x20,0,0x20,0x1,0x6a,0x20,0x2,0x38,0x2,0,0xb,0xb,0xbb,0x8b,0x80,0x80,0,0x1,0,0x41,0,0xb,0xb4,0xb,0x7b,0x22,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x52,0x61,0x6e,0x64,0x6f,0x6d,0x20,0x46,0x72,0x65,0x71,0x75,0x65,0x6e,0x63,0x79,0x20,0x47,0x65,0x6e,0x65,0x72,0x61,0x74,0x6f,0x72,0x22,0x2c,0x22,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x22,0x3a,0x22,0x32,0x2e,0x34,0x2e,0x34,0x22,0x2c,0x22,0x6f,0x70,0x74,0x69,0x6f,0x6e,0x73,0x22,0x3a,0x22,0x2d,0x73,0x63,0x61,0x6c,0x20,0x2d,0x66,0x74,0x7a,0x20,0x32,0x22,0x2c,0x22,0x73,0x69,0x7a,0x65,0x22,0x3a,0x22,0x32,0x31,0x32,0x22,0x2c,0x22,0x69,0x6e,0x70,0x75,0x74,0x73,0x22,0x3a,0x22,0x30,0x22,0x2c,0x22,0x6f,0x75,0x74,0x70,0x75,0x74,0x73,0x22,0x3a,0x22,0x31,0x22,0x2c,0x22,0x6d,0x65,0x74,0x61,0x22,0x3a,0x5b,0x7b,0x22,0x61,0x75,0x74,0x68,0x6f,0x72,0x22,0x3a,0x22,0x45,0x52,0x22,0x7d,0x2c,0x7b,0x22,0x62,0x61,0x73,0x69,0x63,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x46,0x61,0x75,0x73,0x74,0x20,0x42,0x61,0x73,0x69,0x63,0x20,0x45,0x6c,0x65,0x6d,0x65,0x6e,0x74,0x20,0x4c,0x69,0x62,0x72,0x61,0x72,0x79,0x22,0x7d,0x2c,0x7b,0x22,0x62,0x61,0x73,0x69,0x63,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x22,0x3a,0x22,0x30,0x2e,0x30,0x22,0x7d,0x2c,0x7b,0x22,0x66,0x69,0x6c,0x74,0x65,0x72,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x46,0x61,0x75,0x73,0x74,0x20,0x46,0x69,0x6c,0x74,0x65,0x72,0x73,0x20,0x4c,0x69,0x62,0x72,0x61,0x72,0x79,0x22,0x7d,0x2c,0x7b,0x22,0x66,0x69,0x6c,0x74,0x65,0x72,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x22,0x3a,0x22,0x30,0x2e,0x30,0x22,0x7d,0x2c,0x7b,0x22,0x6d,0x61,0x74,0x68,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x61,0x75,0x74,0x68,0x6f,0x72,0x22,0x3a,0x22,0x47,0x52,0x41,0x4d,0x45,0x22,0x7d,0x2c,0x7b,0x22,0x6d,0x61,0x74,0x68,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x63,0x6f,0x70,0x79,0x72,0x69,0x67,0x68,0x74,0x22,0x3a,0x22,0x47,0x52,0x41,0x4d,0x45,0x22,0x7d,0x2c,0x7b,0x22,0x6d,0x61,0x74,0x68,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x6c,0x69,0x63,0x65,0x6e,0x73,0x65,0x22,0x3a,0x22,0x4c,0x47,0x50,0x4c,0x20,0x77,0x69,0x74,0x68,0x20,0x65,0x78,0x63,0x65,0x70,0x74,0x69,0x6f,0x6e,0x22,0x7d,0x2c,0x7b,0x22,0x6d,0x61,0x74,0x68,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x46,0x61,0x75,0x73,0x74,0x20,0x4d,0x61,0x74,0x68,0x20,0x4c,0x69,0x62,0x72,0x61,0x72,0x79,0x22,0x7d,0x2c,0x7b,0x22,0x6d,0x61,0x74,0x68,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x22,0x3a,0x22,0x32,0x2e,0x31,0x22,0x7d,0x2c,0x7b,0x22,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x52,0x61,0x6e,0x64,0x6f,0x6d,0x20,0x46,0x72,0x65,0x71,0x75,0x65,0x6e,0x63,0x79,0x20,0x47,0x65,0x6e,0x65,0x72,0x61,0x74,0x6f,0x72,0x22,0x7d,0x2c,0x7b,0x22,0x6e,0x6f,0x69,0x73,0x65,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x46,0x61,0x75,0x73,0x74,0x20,0x4e,0x6f,0x69,0x73,0x65,0x20,0x47,0x65,0x6e,0x65,0x72,0x61,0x74,0x6f,0x72,0x20,0x4c,0x69,0x62,0x72,0x61,0x72,0x79,0x22,0x7d,0x2c,0x7b,0x22,0x6e,0x6f,0x69,0x73,0x65,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x22,0x3a,0x22,0x30,0x2e,0x30,0x22,0x7d,0x2c,0x7b,0x22,0x6f,0x73,0x63,0x69,0x6c,0x6c,0x61,0x74,0x6f,0x72,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x46,0x61,0x75,0x73,0x74,0x20,0x4f,0x73,0x63,0x69,0x6c,0x6c,0x61,0x74,0x6f,0x72,0x20,0x4c,0x69,0x62,0x72,0x61,0x72,0x79,0x22,0x7d,0x2c,0x7b,0x22,0x6f,0x73,0x63,0x69,0x6c,0x6c,0x61,0x74,0x6f,0x72,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x22,0x3a,0x22,0x30,0x2e,0x30,0x22,0x7d,0x2c,0x7b,0x22,0x73,0x69,0x67,0x6e,0x61,0x6c,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x6e,0x61,0x6d,0x65,0x22,0x3a,0x22,0x46,0x61,0x75,0x73,0x74,0x20,0x53,0x69,0x67,0x6e,0x61,0x6c,0x20,0x52,0x6f,0x75,0x74,0x69,0x6e,0x67,0x20,0x4c,0x69,0x62,0x72,0x61,0x72,0x79,0x22,0x7d,0x2c,0x7b,0x22,0x73,0x69,0x67,0x6e,0x61,0x6c,0x73,0x2e,0x6c,0x69,0x62,0x2f,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x22,0x3a,0x22,0x30,0x2e,0x30,0x22,0x7d,0x5d,0x2c,0x22,0x75,0x69,0x22,0x3a,0x5b,0x7b,0x22,0x74,0x79,0x70,0x65,0x22,0x3a,0x22,0x76,0x67,0x72,0x6f,0x75,0x70,0x22,0x2c,0x22,0x6c,0x61,0x62,0x65,0x6c,0x22,0x3a,0x22,0x52,0x61,0x6e,0x64,0x6f,0x6d,0x20,0x46,0x72,0x65,0x71,0x75,0x65,0x6e,0x63,0x79,0x20,0x47,0x65,0x6e,0x65,0x72,0x61,0x74,0x6f,0x72,0x22,0x2c,0x22,0x69,0x74,0x65,0x6d,0x73,0x22,0x3a,0x5b,0x7b,0x22,0x74,0x79,0x70,0x65,0x22,0x3a,0x22,0x68,0x73,0x6c,0x69,0x64,0x65,0x72,0x22,0x2c,0x22,0x6c,0x61,0x62,0x65,0x6c,0x22,0x3a,0x22,0x49,0x6e,0x73,0x74,0x72,0x75,0x6d,0x65,0x6e,0x74,0x20,0x48,0x61,0x6e,0x64,0x22,0x2c,0x22,0x61,0x64,0x64,0x72,0x65,0x73,0x73,0x22,0x3a,0x22,0x2f,0x52,0x61,0x6e,0x64,0x6f,0x6d,0x5f,0x46,0x72,0x65,0x71,0x75,0x65,0x6e,0x63,0x79,0x5f,0x47,0x65,0x6e,0x65,0x72,0x61,0x74,0x6f,0x72,0x2f,0x49,0x6e,0x73,0x74,0x72,0x75,0x6d,0x65,0x6e,0x74,0x5f,0x48,0x61,0x6e,0x64,0x22,0x2c,0x22,0x69,0x6e,0x64,0x65,0x78,0x22,0x3a,0x22,0x31,0x31,0x36,0x22,0x2c,0x22,0x6d,0x65,0x74,0x61,0x22,0x3a,0x5b,0x7b,0x22,0x31,0x22,0x3a,0x22,0x22,0x7d,0x2c,0x7b,0x22,0x61,0x63,0x63,0x22,0x3a,0x22,0x30,0x20,0x31,0x20,0x2d,0x31,0x30,0x20,0x30,0x20,0x31,0x30,0x22,0x7d,0x5d,0x2c,0x22,0x69,0x6e,0x69,0x74,0x22,0x3a,0x22,0x38,0x22,0x2c,0x22,0x6d,0x69,0x6e,0x22,0x3a,0x22,0x30,0x22,0x2c,0x22,0x6d,0x61,0x78,0x22,0x3a,0x22,0x31,0x35,0x22,0x2c,0x22,0x73,0x74,0x65,0x70,0x22,0x3a,0x22,0x31,0x22,0x7d,0x2c,0x7b,0x22,0x74,0x79,0x70,0x65,0x22,0x3a,0x22,0x68,0x73,0x6c,0x69,0x64,0x65,0x72,0x22,0x2c,0x22,0x6c,0x61,0x62,0x65,0x6c,0x22,0x3a,0x22,0x48,0x69,0x67,0x68,0x74,0x22,0x2c,0x22,0x61,0x64,0x64,0x72,0x65,0x73,0x73,0x22,0x3a,0x22,0x2f,0x52,0x61,0x6e,0x64,0x6f,0x6d,0x5f,0x46,0x72,0x65,0x71,0x75,0x65,0x6e,0x63,0x79,0x5f,0x47,0x65,0x6e,0x65,0x72,0x61,0x74,0x6f,0x72,0x2f,0x48,0x69,0x67,0x68,0x74,0x22,0x2c,0x22,0x69,0x6e,0x64,0x65,0x78,0x22,0x3a,0x22,0x31,0x37,0x36,0x22,0x2c,0x22,0x6d,0x65,0x74,0x61,0x22,0x3a,0x5b,0x7b,0x22,0x32,0x22,0x3a,0x22,0x22,0x7d,0x2c,0x7b,0x22,0x61,0x63,0x63,0x22,0x3a,0x22,0x31,0x20,0x31,0x20,0x2d,0x31,0x30,0x20,0x30,0x20,0x31,0x30,0x22,0x7d,0x2c,0x7b,0x22,0x74,0x6f,0x6f,0x6c,0x74,0x69,0x70,0x22,0x3a,0x22,0x66,0x72,0x65,0x71,0x75,0x65,0x6e,0x63,0x79,0x20,0x72,0x61,0x6e,0x67,0x65,0x20,0x68,0x69,0x67,0x68,0x74,0x20,0x66,0x61,0x63,0x74,0x6f,0x72,0x22,0x7d,0x5d,0x2c,0x22,0x69,0x6e,0x69,0x74,0x22,0x3a,0x22,0x31,0x30,0x30,0x30,0x22,0x2c,0x22,0x6d,0x69,0x6e,0x22,0x3a,0x22,0x33,0x30,0x30,0x22,0x2c,0x22,0x6d,0x61,0x78,0x22,0x3a,0x22,0x32,0x35,0x30,0x30,0x22,0x2c,0x22,0x73,0x74,0x65,0x70,0x22,0x3a,0x22,0x31,0x22,0x7d,0x2c,0x7b,0x22,0x74,0x79,0x70,0x65,0x22,0x3a,0x22,0x68,0x73,0x6c,0x69,0x64,0x65,0x72,0x22,0x2c,0x22,0x6c,0x61,0x62,0x65,0x6c,0x22,0x3a,0x22,0x53,0x70,0x65,0x65,0x64,0x22,0x2c,0x22,0x61,0x64,0x64,0x72,0x65,0x73,0x73,0x22,0x3a,0x22,0x2f,0x52,0x61,0x6e,0x64,0x6f,0x6d,0x5f,0x46,0x72,0x65,0x71,0x75,0x65,0x6e,0x63,0x79,0x5f,0x47,0x65,0x6e,0x65,0x72,0x61,0x74,0x6f,0x72,0x2f,0x53,0x70,0x65,0x65,0x64,0x22,0x2c,0x22,0x69,0x6e,0x64,0x65,0x78,0x22,0x3a,0x22,0x38,0x38,0x22,0x2c,0x22,0x6d,0x65,0x74,0x61,0x22,0x3a,0x5b,0x7b,0x22,0x34,0x22,0x3a,0x22,0x22,0x7d,0x2c,0x7b,0x22,0x61,0x63,0x63,0x22,0x3a,0x22,0x30,0x20,0x31,0x20,0x2d,0x31,0x30,0x20,0x30,0x20,0x31,0x30,0x22,0x7d,0x2c,0x7b,0x22,0x73,0x74,0x79,0x6c,0x65,0x22,0x3a,0x22,0x6b,0x6e,0x6f,0x62,0x22,0x7d,0x5d,0x2c,0x22,0x69,0x6e,0x69,0x74,0x22,0x3a,0x22,0x34,0x32,0x30,0x22,0x2c,0x22,0x6d,0x69,0x6e,0x22,0x3a,0x22,0x31,0x38,0x30,0x22,0x2c,0x22,0x6d,0x61,0x78,0x22,0x3a,0x22,0x37,0x32,0x30,0x22,0x2c,0x22,0x73,0x74,0x65,0x70,0x22,0x3a,0x22,0x31,0x22,0x7d,0x5d,0x7d,0x5d,0x7d,0x30]).buffer;

}
/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Audio buffer size
faust.buffer_size = 128;

faust.asm2wasm = { // special asm2wasm imports
    "fmod": function(x, y) {
        return x % y;
    },
    "log10": function(x) {
        return Math.log(x) / Math.log(10);
    },
    "remainder": function(x, y) {
        return x - Math.round(x/y) * y;
    }
}

faust.importObject = { imports: { print: arg => console.log(arg) } }
faust.importObject["global.Math"] = Math;
faust.importObject["asm2wasm"] = faust.asm2wasm;

// WebAssembly instance
faust.SRandomFrequencyGenerator_instance = null;

// Monophonic Faust DSP
class SRandomFrequencyGeneratorProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFrequencyGeneratorProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFrequencyGeneratorProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SRandomFrequencyGeneratorProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            //obj.outputs_items.push(item.address);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SRandomFrequencyGeneratorProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SRandomFrequencyGeneratorProcessor.parse_ui(JSON.parse(getJSONSRandomFrequencyGenerator()).ui, params, SRandomFrequencyGeneratorProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSRandomFrequencyGenerator());
        
        this.output_handler = null;
        this.ins = null;
        this.outs = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = faust.SRandomFrequencyGenerator_instance.exports;
        this.HEAP = faust.SRandomFrequencyGenerator_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);
        
        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);
        
        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];
        
        // input items
        this.inputs_items = [];
        
        // Start of HEAP index
        
        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * faust.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;
        
        this.pathTable = [];
        
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SRandomFrequencyGeneratorProcessor.parse_ui(this.json_object.ui, this, SRandomFrequencyGeneratorProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }
       
        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) {
        
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var channel = 0; channel < input.length; ++channel) {
                var dspInput = this.dspInChannnels[channel];
                dspInput.set(input[channel]);
            }
        }
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.factory.setParamValue(this.dsp, this.pathTable[params[i][0]], params[i][1][0]);
        }
        
        // Compute
        this.factory.compute(this.dsp, 128, this.ins, this.outs);
        
        // Copy outputs
        if (output !== undefined) {
            for (var channel = 0; channel < output.length; ++channel) {
                var dspOutput = this.dspOutChannnels[channel];
                output[channel].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Compile wasm binary module
WebAssembly.instantiate(getBinaryCodeSRandomFrequencyGenerator(), faust.importObject)
            .then(dsp_module => {
                  faust.SRandomFrequencyGenerator_instance = dsp_module.instance;
                  registerProcessor('SRandomFrequencyGenerator', SRandomFrequencyGeneratorProcessor);
            })
            .catch(function() { console.log("Faust SRandomFrequencyGenerator cannot be loaded or compiled"); });

