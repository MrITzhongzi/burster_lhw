/**
 * 基于jq的分页器
 * Created by 李洪伟 on 2017/6/5.
 */

;(function () {
    
    function Burster_lhw(el,callback,totalPages) {
        this.$el= $(el);
        this.callback = callback;
        this.totalPages = totalPages;

        this.init();
    };
    var proto = {
        init : function () {
            this.drawDom();
            this.setStyle();
        },
        //渲染DOM
        drawDom : function () {
            var html = '';
            html += '<ul style="overflow: hidden;">';
            for(var i = 0;i< this.totalPages;i++){
                html += '<li>'+(i+1) + '</li>';
            }
            html += '</ul>';
            this.$html = $(html);
            this.$el.html(html);
        },
        setStyle : function () {
            console.log(this.$html.find('li'));
            this.$html.find('li').css({
                'width' : '50px',
                'float' : 'left',
                'height' : '50px',
                'border' : '1px solid #ccc',
                'background-color' : '#fff'
            })
        }
    };
    Burster_lhw.prototype = proto;
    //暴露接口
    window.Burster_lhw = Burster_lhw;
})(window,$);
