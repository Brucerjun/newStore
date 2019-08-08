var $  = function(id) {
    return document.getElementById(id);
}
var news = {
    data: [
        {
            title: '小度智能音箱大金刚+小度畅听VIP会员年卡 音',
            fi: '箱立减30元',
            src: './image/1559115063264366.jpg',
            desc: '小度人工智能大金刚 百度旗下人工智能助手 一个人的金属乐队, 一家人的大指挥家',

            color: '黑色',
            campaignPirce: 199,
            originPrice: 9.9,
            num: 1,
            ui: '换促',
            ko: '销',
            checked: true
        },
        {
            title: '小度智能音箱大金刚+小度畅听VIP会员年卡 音',
            fi: '箱立减30元',
            src: './image/1559115063264366.jpg',
            desc: '小度人工智能大金刚 百度旗下人工智能助手 一个人的金属乐队, 一家人的大指挥家',

            color: '黑色',
            campaignPirce: 199,
            originPrice: 9.9,
            num: 1,
            ui: '换促',
            ko: '销',
            checked: false
        },
        {
            title: '小度智能音箱大金刚+小度畅听VIP会员年卡 音',
            fi: '箱立减30元',
            src: './image/1559115063264366.jpg',
            desc: '小度人工智能大金刚 百度旗下人工智能助手 一个人的金属乐队, 一家人的大指挥家',

            color: '黑色',
            campaignPirce: 199,
            originPrice: 9.9,
            num: 1,
            ui: '换促',
            ko: '销',
            checked: true
        },
        {
            title: '小度智能音箱大金刚+小度畅听VIP会员年卡 音',
            fi: '箱立减30元',
            src: './image/1559115063264366.jpg',
            desc: '小度人工智能大金刚 百度旗下人工智能助手 一个人的金属乐队, 一家人的大指挥家',

            color: '黑色',
            campaignPirce: 199,
            originPrice: 9.9,
            num: 1,
            ui: '换促',
            ko: '销',
            checked: false
        }
    ],

    render: function () {
        var bo = '';
        var list = this.data;
        if (list && list instanceof (Array) && list.length > 0) {
            list.forEach(function (item, index) {
                bo += ` <div class="day-two">
                <div class="day-three">
                    <div class="day-four">买减</div>
                    <div>
                        <div>${item.title}</div>
                        <div>${item.fi}</div>
                    </div>
                    <h1>换商品></h1>
                </div>
                <div class="day-five">
                    <div class="si ${item.checked ? 'check' : ''}">
                        <span class="iconfont icon-dui"></span>
                    </div>
                    <div class="day-six">
                        <img src="${item.src}" alt="">
                    </div>
                    <div class="day-senve">
                        <div>${item.desc}</div>
                        <h1>${item.color}</h1>
                        <div class="day-eight">
                            <h2>${item.campaignPirce}</h2>
                            <div class="head-nine">
                                <span class="head-ten">-</span>
                                <input type="text" value="${item.num}">
                                <span class="hong">+</span>
                                <div class="day-nine">
                                    <div>
                                        <div>换促</div>
                                        <div>销</div>
                                    </div>
                                    <div class="iconfont icon-angle-down"></div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>`
            });
            $('content').innerHTML = bo;
        }
    }
}
news.render();
