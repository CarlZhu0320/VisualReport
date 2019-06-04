export default {
    series : [
        {
            type: 'map',
            mapType: 'gz',
            zoom: 1.26,
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:false}}
            },
            data: [
                {name:'贵阳市',value: 2},
                {name:'遵义市',value: 1},
                {name:'铜仁市',value: 1},
                {name:'毕节市',value: 1},
                {name:'安顺市',value: 1},
                {name:'六盘水市',value: 1},
                {name:'黔西南布依族苗族自治州',value: 1},
                {name:'黔东南苗族侗族自治州',value: 1},
                {name:'黔南布依族苗族自治州',value: 1}
            ]
        }
    ],
    dataRange: {
        show:false,
        x: 'left',
        y: 'bottom',
        splitList: [
            { start: 1, end: 1, color: '#cfc5de' },
            { start: 2, end: 2, color: '#FFFF00' }
        ]
    }
  };