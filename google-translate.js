// javascript:
(function(w, d){
    var t = (d.selection) ? d.selection.createRange().text :
    (d.getSelection) ? d.getSelection() :
    (w.getSelection) ? w.getSelection() : '';

    (t == '') && (t = w.prompt('翻訳する文字を入力して下さい。', ''));
    t ? w.open('http://translate.google.co.jp/%23en%7Cja%7C' + encodeURI(t), '_blank', '') : {};
})(window, document);

