var WebSocket = require('ws');
var ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');
var sCryptoName;

var oCryptoList = {
	ETHBTC:{name:'ETHBTC',oWebSocket:''},
	LTCBTC:{name:'LTCBTC',oWebSocket:''},
	BNBBTC: {name:'BNBBTC',oWebSocket:''},
	NEOBTC: {name:'NEOBTC',oWebSocket:''},
	QTUMETH: {name:'QTUMETH',oWebSocket:''},
	EOSETH: {name:'EOSETH',oWebSocket:''},
	SNTETH: {name:'SNTETH',oWebSocket:''},
	BNTETH: {name:'BNTETH',oWebSocket:''},
	BCCBTC: {name:'BCCBTC',oWebSocket:''},
	GASBTC: {name:'GASBTC',oWebSocket:''},
	BNBETH: {name:'BNBETH',oWebSocket:''},
	BTCUSDT: {name:'BTCUSDT',oWebSocket:''},
	ETHUSDT: {name:'ETHUSDT',oWebSocket:''},
	HSRBTC: {name:'HSRBTC',oWebSocket:''},
	OAXETH: {name:'OAXETH',oWebSocket:''},
	DNTETH: {name:'DNTETH',oWebSocket:''},
	MCOETH: {name:'MCOETH',oWebSocket:''},
	ICNETH: {name:'ICNETH',oWebSocket:''},
	MCOBTC: {name:'MCOBTC',oWebSocket:''},
	WTCBTC: {name:'WTCBTC',oWebSocket:''},
	WTCETH: {name:'WTCETH',oWebSocket:''},
	LRCBTC: {name:'LRCBTC',oWebSocket:''},
	LRCETH: {name:'LRCETH',oWebSocket:''},
	QTUMBTC: {name:'QTUMBTC',oWebSocket:''},
	YOYOBTC: {name:'YOYOBTC',oWebSocket:''},
	OMGBTC: {name:'OMGBTC',oWebSocket:''},
	OMGETH: {name:'OMGETH',oWebSocket:''},
	ZRXBTC: {name:'ZRXBTC',oWebSocket:''},
	ZRXETH: {name:'ZRXETH',oWebSocket:''},
	STRATBTC: {name:'STRATBTC',oWebSocket:''},
	STRATETH: {name:'STRATETH',oWebSocket:''},
	SNGLSBTC: {name:'SNGLSBTC',oWebSocket:''},
	SNGLSETH: {name:'SNGLSETH',oWebSocket:''},
	BQXBTC: {name:'BQXBTC',oWebSocket:''},
	BQXETH: {name:'BQXETH',oWebSocket:''},
	KNCBTC: {name:'KNCBTC',oWebSocket:''},
	KNCETH: {name:'KNCETH',oWebSocket:''},
	FUNBTC: {name:'FUNBTC',oWebSocket:''},
	FUNETH: {name:'FUNETH',oWebSocket:''},
	SNMBTC: {name:'SNMBTC',oWebSocket:''},
	SNMETH: {name:'SNMETH',oWebSocket:''},
	NEOETH: {name:'NEOETH',oWebSocket:''},
	IOTABTC: {name:'IOTABTC',oWebSocket:''},
	IOTAETH: {name:'IOTAETH',oWebSocket:''},
	LINKBTC: {name:'LINKBTC',oWebSocket:''},
	LINKETH: {name:'LINKETH',oWebSocket:''},
	XVGBTC: {name:'XVGBTC',oWebSocket:''},
	XVGETH: {name:'XVGETH',oWebSocket:''},
	CTRBTC: {name:'CTRBTC',oWebSocket:''},
	CTRETH: {name:'CTRETH',oWebSocket:''},
	SALTBTC: {name:'SALTBTC',oWebSocket:''},
	SALTETH: {name:'SALTETH',oWebSocket:''},
	MDABTC: {name:'MDABTC',oWebSocket:''},
	MDAETH: {name:'MDAETH',oWebSocket:''},
	MTLBTC: {name:'MTLBTC',oWebSocket:''},
	MTLETH: {name:'MTLETH',oWebSocket:''},
	SUBBTC: {name:'SUBBTC',oWebSocket:''},
	SUBETH: {name:'SUBETH',oWebSocket:''},
	EOSBTC: {name:'EOSBTC',oWebSocket:''},
	SNTBTC: {name:'SNTBTC',oWebSocket:''},
	ETCETH: {name:'ETCETH',oWebSocket:''},
	ETCBTC: {name:'ETCBTC',oWebSocket:''},
	MTHBTC: {name:'MTHBTC',oWebSocket:''},
	MTHETH: {name:'MTHETH',oWebSocket:''},
	ENGBTC: {name:'ENGBTC',oWebSocket:''},
	ENGETH: {name:'ENGETH',oWebSocket:''},
	DNTBTC: {name:'DNTBTC',oWebSocket:''},
	ZECBTC: {name:'ZECBTC',oWebSocket:''},
	ZECETH: {name:'ZECETH',oWebSocket:''},
	BNTBTC: {name:'BNTBTC',oWebSocket:''},
	ASTBTC: {name:'ASTBTC',oWebSocket:''},
	ASTETH: {name:'ASTETH',oWebSocket:''},
	DASHBTC: {name:'DASHBTC',oWebSocket:''},
	DASHETH: {name:'DASHETH',oWebSocket:''},
	OAXBTC: {name:'OAXBTC',oWebSocket:''},
	ICNBTC: {name:'ICNBTC',oWebSocket:''},
	BTGBTC: {name:'BTGBTC',oWebSocket:''},
	BTGETH: {name:'BTGETH',oWebSocket:''},
	EVXBTC: {name:'EVXBTC',oWebSocket:''},
	EVXETH: {name:'EVXETH',oWebSocket:''},
	REQBTC: {name:'REQBTC',oWebSocket:''},
	REQETH: {name:'REQETH',oWebSocket:''},
	VIBBTC: {name:'VIBBTC',oWebSocket:''},
	VIBETH: {name:'VIBETH',oWebSocket:''},
	HSRETH: {name:'HSRETH',oWebSocket:''},
	TRXBTC: {name:'TRXBTC',oWebSocket:''},
	TRXETH: {name:'TRXETH',oWebSocket:''},
	POWRBTC: {name:'POWRBTC',oWebSocket:''},
	POWRETH: {name:'POWRETH',oWebSocket:''},
	ARKBTC: {name:'ARKBTC',oWebSocket:''},
	ARKETH: {name:'ARKETH',oWebSocket:''},
	YOYOETH: {name:'YOYOETH',oWebSocket:''},
	XRPBTC: {name:'XRPBTC',oWebSocket:''},
	XRPETH: {name:'XRPETH',oWebSocket:''},
	MODBTC: {name:'MODBTC',oWebSocket:''},
	MODETH: {name:'MODETH',oWebSocket:''},
	ENJBTC: {name:'ENJBTC',oWebSocket:''},
	ENJETH: {name:'ENJETH',oWebSocket:''},
	STORJBTC: {name:'STORJBTC',oWebSocket:''},
	STORJETH: {name:'STORJETH',oWebSocket:''},
	BNBUSDT: {name:'BNBUSDT',oWebSocket:''},
	VENBNB: {name:'VENBNB',oWebSocket:''},
	YOYOBNB: {name:'YOYOBNB',oWebSocket:''},
	POWRBNB: {name:'POWRBNB',oWebSocket:''},
	VENBTC: {name:'VENBTC',oWebSocket:''},
	VENETH: {name:'VENETH',oWebSocket:''},
	KMDBTC: {name:'KMDBTC',oWebSocket:''},
	KMDETH: {name:'KMDETH',oWebSocket:''},
	NULSBNB: {name:'NULSBNB',oWebSocket:''},
	RCNBTC: {name:'RCNBTC',oWebSocket:''},
	RCNETH: {name:'RCNETH',oWebSocket:''},
	RCNBNB: {name:'RCNBNB',oWebSocket:''},
	NULSBTC: {name:'NULSBTC',oWebSocket:''},
	NULSETH: {name:'NULSETH',oWebSocket:''},
	RDNBTC: {name:'RDNBTC',oWebSocket:''},
	RDNETH: {name:'RDNETH',oWebSocket:''},
	RDNBNB: {name:'RDNBNB',oWebSocket:''},
	XMRBTC: {name:'XMRBTC',oWebSocket:''},
	XMRETH: {name:'XMRETH',oWebSocket:''},
	DLTBNB: {name:'DLTBNB',oWebSocket:''},
	WTCBNB: {name:'WTCBNB',oWebSocket:''},
	DLTBTC: {name:'DLTBTC',oWebSocket:''},
	DLTETH: {name:'DLTETH',oWebSocket:''},
	AMBBTC: {name:'AMBBTC',oWebSocket:''},
	AMBETH: {name:'AMBETH',oWebSocket:''},
	AMBBNB: {name:'AMBBNB',oWebSocket:''},
	BCCETH: {name:'BCCETH',oWebSocket:''},
	BCCUSDT: {name:'BCCUSDT',oWebSocket:''},
	BCCBNB: {name:'BCCBNB',oWebSocket:''},
	BATBTC: {name:'BATBTC',oWebSocket:''},
	BATETH: {name:'BATETH',oWebSocket:''},
	BATBNB: {name:'BATBNB',oWebSocket:''},
	BCPTBTC: {name:'BCPTBTC',oWebSocket:''},
	BCPTETH: {name:'BCPTETH',oWebSocket:''},
	BCPTBNB: {name:'BCPTBNB',oWebSocket:''},
	ARNBTC: {name:'ARNBTC',oWebSocket:''},
	ARNETH: {name:'ARNETH',oWebSocket:''},
	GVTBTC: {name:'GVTBTC',oWebSocket:''},
	GVTETH: {name:'GVTETH',oWebSocket:''},
	CDTBTC: {name:'CDTBTC',oWebSocket:''},
	CDTETH: {name:'CDTETH',oWebSocket:''},
	GXSBTC: {name:'GXSBTC',oWebSocket:''},
	GXSETH: {name:'GXSETH',oWebSocket:''},
	NEOUSDT: {name:'NEOUSDT',oWebSocket:''},
	NEOBNB: {name:'NEOBNB',oWebSocket:''},
	POEBTC: {name:'POEBTC',oWebSocket:''},
	POEETH: {name:'POEETH',oWebSocket:''},
	QSPBTC: {name:'QSPBTC',oWebSocket:''},
	QSPETH: {name:'QSPETH',oWebSocket:''},
	QSPBNB: {name:'QSPBNB',oWebSocket:''},
	BTSBTC: {name:'BTSBTC',oWebSocket:''},
	BTSETH: {name:'BTSETH',oWebSocket:''},
	BTSBNB: {name:'BTSBNB',oWebSocket:''},
	XZCBTC: {name:'XZCBTC',oWebSocket:''},
	XZCETH: {name:'XZCETH',oWebSocket:''},
	XZCBNB: {name:'XZCBNB',oWebSocket:''},
	LSKBTC: {name:'LSKBTC',oWebSocket:''},
	LSKETH: {name:'LSKETH',oWebSocket:''},
	LSKBNB: {name:'LSKBNB',oWebSocket:''},
	TNTBTC: {name:'TNTBTC',oWebSocket:''},
	TNTETH: {name:'TNTETH',oWebSocket:''},
	FUELBTC: {name:'FUELBTC',oWebSocket:''},
	FUELETH: {name:'FUELETH',oWebSocket:''},
	MANABTC: {name:'MANABTC',oWebSocket:''},
	MANAETH: {name:'MANAETH',oWebSocket:''},
	BCDBTC: {name:'BCDBTC',oWebSocket:''},
	BCDETH: {name:'BCDETH',oWebSocket:''},
	DGDBTC: {name:'DGDBTC',oWebSocket:''},
	DGDETH: {name:'DGDETH',oWebSocket:''},
	IOTABNB: {name:'IOTABNB',oWebSocket:''},
	ADXBTC: {name:'ADXBTC',oWebSocket:''},
	ADXETH: {name:'ADXETH',oWebSocket:''},
	ADXBNB: {name:'ADXBNB',oWebSocket:''},
	ADABTC: {name:'ADABTC',oWebSocket:''},
	ADAETH: {name:'ADAETH',oWebSocket:''},
	PPTBTC: {name:'PPTBTC',oWebSocket:''},
	PPTETH: {name:'PPTETH',oWebSocket:''},
	CMTBTC: {name:'CMTBTC',oWebSocket:''},
	CMTETH: {name:'CMTETH',oWebSocket:''},
	CMTBNB: {name:'CMTBNB',oWebSocket:''},
	XLMBTC: {name:'XLMBTC',oWebSocket:''},
	XLMETH: {name:'XLMETH',oWebSocket:''},
	XLMBNB: {name:'XLMBNB',oWebSocket:''},
	CNDBTC: {name:'CNDBTC',oWebSocket:''},
	CNDETH: {name:'CNDETH',oWebSocket:''},
	CNDBNB: {name:'CNDBNB',oWebSocket:''},
	LENDBTC: {name:'LENDBTC',oWebSocket:''},
	LENDETH: {name:'LENDETH',oWebSocket:''},
	WABIBTC: {name:'WABIBTC',oWebSocket:''},
	WABIETH: {name:'WABIETH',oWebSocket:''},
	WABIBNB: {name:'WABIBNB',oWebSocket:''},
	LTCETH: {name:'LTCETH',oWebSocket:''},
	LTCUSDT: {name:'LTCUSDT',oWebSocket:''},
	LTCBNB: {name:'LTCBNB',oWebSocket:''},
	TNBBTC: {name:'TNBBTC',oWebSocket:''},
	TNBETH: {name:'TNBETH',oWebSocket:''},
	WAVESBTC: {name:'WAVESBTC',oWebSocket:''},
	WAVESETH: {name:'WAVESETH',oWebSocket:''},
	WAVESBNB: {name:'WAVESBNB',oWebSocket:''},
	GTOBTC: {name:'GTOBTC',oWebSocket:''},
	GTOETH: {name:'GTOETH',oWebSocket:''},
	GTOBNB: {name:'GTOBNB',oWebSocket:''},
	ICXBTC: {name:'ICXBTC',oWebSocket:''},
	ICXETH: {name:'ICXETH',oWebSocket:''},
	ICXBNB: {name:'ICXBNB',oWebSocket:''},
	OSTBTC: {name:'OSTBTC',oWebSocket:''},
	OSTETH: {name:'OSTETH',oWebSocket:''},
	OSTBNB: {name:'OSTBNB',oWebSocket:''},
	ELFBTC: {name:'ELFBTC',oWebSocket:''},
	ELFETH: {name:'ELFETH',oWebSocket:''},
	AIONBTC: {name:'AIONBTC',oWebSocket:''},
	AIONETH: {name:'AIONETH',oWebSocket:''},
	AIONBNB: {name:'AIONBNB',oWebSocket:''},
	NEBLBTC: {name:'NEBLBTC',oWebSocket:''},
	NEBLETH: {name:'NEBLETH',oWebSocket:''},
	NEBLBNB: {name:'NEBLBNB',oWebSocket:''},
	BRDBTC: {name:'BRDBTC',oWebSocket:''},
	BRDETH: {name:'BRDETH',oWebSocket:''},
	BRDBNB: {name:'BRDBNB',oWebSocket:''},
	MCOBNB: {name:'MCOBNB',oWebSocket:''},
	EDOBTC: {name:'EDOBTC',oWebSocket:''},
	EDOETH: {name:'EDOETH',oWebSocket:''},
	WINGSBTC: {name:'WINGSBTC',oWebSocket:''},
	WINGSETH: {name:'WINGSETH',oWebSocket:''},
	NAVBTC: {name:'NAVBTC',oWebSocket:''},
	NAVETH: {name:'NAVETH',oWebSocket:''},
	NAVBNB: {name:'NAVBNB',oWebSocket:''},
	LUNBTC: {name:'LUNBTC',oWebSocket:''},
	LUNETH: {name:'LUNETH',oWebSocket:''},
	TRIGBTC: {name:'TRIGBTC',oWebSocket:''},
	TRIGETH: {name:'TRIGETH',oWebSocket:''},
	TRIGBNB: {name:'TRIGBNB',oWebSocket:''},
	APPCBTC: {name:'APPCBTC',oWebSocket:''},
	APPCETH: {name:'APPCETH',oWebSocket:''},
	APPCBNB: {name:'APPCBNB',oWebSocket:''},
	VIBEBTC: {name:'VIBEBTC',oWebSocket:''},
	VIBEETH: {name:'VIBEETH',oWebSocket:''},
	RLCBTC: {name:'RLCBTC',oWebSocket:''},
	RLCETH: {name:'RLCETH',oWebSocket:''},
	RLCBNB: {name:'RLCBNB',oWebSocket:''},
	INSBTC: {name:'INSBTC',oWebSocket:''},
	INSETH: {name:'INSETH',oWebSocket:''},
	PIVXBTC: {name:'PIVXBTC',oWebSocket:''},
	PIVXETH: {name:'PIVXETH',oWebSocket:''},
	PIVXBNB: {name:'PIVXBNB',oWebSocket:''},
	IOSTBTC: {name:'IOSTBTC',oWebSocket:''},
	IOSTETH: {name:'IOSTETH',oWebSocket:''},
	CHATBTC: {name:'CHATBTC',oWebSocket:''},
	CHATETH: {name:'CHATETH',oWebSocket:''},
	STEEMBTC: {name:'STEEMBTC',oWebSocket:''},
	STEEMETH: {name:'STEEMETH',oWebSocket:''},
	STEEMBNB: {name:'STEEMBNB',oWebSocket:''},
	NANOBTC: {name:'NANOBTC',oWebSocket:''},
	NANOETH: {name:'NANOETH',oWebSocket:''},
	NANOBNB: {name:'NANOBNB',oWebSocket:''},
	VIABTC: {name:'VIABTC',oWebSocket:''},
	VIAETH: {name:'VIAETH',oWebSocket:''},
	VIABNB: {name:'VIABNB',oWebSocket:''},
	BLZBTC: {name:'BLZBTC',oWebSocket:''},
	BLZETH: {name:'BLZETH',oWebSocket:''},
	BLZBNB: {name:'BLZBNB',oWebSocket:''},
	AEBTC: {name:'AEBTC',oWebSocket:''},
	AEETH: {name:'AEETH',oWebSocket:''},
	AEBNB: {name:'AEBNB',oWebSocket:''},
	RPXBTC: {name:'RPXBTC',oWebSocket:''},
	RPXETH: {name:'RPXETH',oWebSocket:''},
	RPXBNB: {name:'RPXBNB',oWebSocket:''},
	NCASHBTC: {name:'NCASHBTC',oWebSocket:''},
	NCASHETH: {name:'NCASHETH',oWebSocket:''},
	NCASHBNB: {name:'NCASHBNB',oWebSocket:''},
	POABTC: {name:'POABTC',oWebSocket:''},
	POAETH: {name:'POAETH',oWebSocket:''},
	POABNB: {name:'POABNB',oWebSocket:''}
};

var nothing = function()
{};

var ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');
ws.on('message', function incoming(data) {  
	add = JSON.parse(data);

	add.forEach(function(items) {
	  sCryptoName = items.s;
	  oCryptoList[sCryptoName]['oWebSocket'] = items;
	});
	console.log(oCryptoList);
});

ws.on('close', function close() {
  nothing();
});

module.exports = {
	oCryptoList: () => {
    return oCryptoList;
};
        






