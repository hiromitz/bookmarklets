// javascript:
(function(w, d){
    var t = (d.selection) ? d.selection.createRange().text :
    (d.getSelection) ? d.getSelection() :
    (w.getSelection) ? w.getSelection() : '';

    (t == '') && (t = w.prompt('翻訳する文字を入力して下さい。', ''));
    t ? w.open('http://eow.alc.co.jp/' + encodeURI(t) + '/UTF-8/', '_blank', '') : {};
})(window, document);

/* Bookmarklet
javascript:(function(w,d){var t=(d.selection)?d.selection.createRange().text:(d.getSelection)?d.getSelection():(w.getSelection)?w.getSelection():'';(t=='')&&(t=w.prompt("%E7%BF%BB%E8%A8%B3%E3%81%99%E3%82%8B%E6%96%87%E5%AD%97%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%A6%E4%B8%8B%E3%81%95%E3%81%84",""));t?w.open('http://eow.alc.co.jp/'+encodeURI(t)+'/UTF-8/','_blank',''):{};})(window,document);
*/
