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
            html += '<li>'+ "<" +'</li>';
            for(var i = 0;i< this.totalPages;i++){
                html += '<li>'+(i+1) + '</li>';
            }
            html += '<li>'+ ">" +'</li>';
            html += '</ul>';

            this.$el.html(html);

        },
        setStyle : function () {
            console.log(this.$el.find('li'));
            this.$el.css({
                'text-align' : 'center'
            });
            this.$el.find('*').css({
                'padding' : '0',
                'margin' : '0'
            });
            this.$el.find('ul').css({
                'display' : 'inline-block',
                'margin' : '0'
            });
            this.$el.find('li').css({
                'width' : '30px',
                'height' : '30px',
                'border' : '1px solid #ccc',
                'background-color' : '#fff',
                'list-style' : 'none',
                'float' : 'left',
                'line-height' : '30px',
                'cursor' : 'pointer'
            });
           /* this.$el.find('li.active').css({
                'background-color' : '#23d6e2'
            });*/
        }
    };
    Burster_lhw.prototype = proto;
    //暴露接口
    window.Burster_lhw = Burster_lhw;
})(window,$);
