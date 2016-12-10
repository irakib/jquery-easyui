if ($.fn.pagination){
    $.fn.pagination.defaults.beforePageText = 'পৃষ্ঠা';
    $.fn.pagination.defaults.afterPageText = 'মোট {pages}';
    $.fn.pagination.defaults.displayMsg = '{total} এর মধ্যে {from} থেকে {to} পর্যন্ত';
}
if ($.fn.datagrid){
    $.fn.datagrid.defaults.loadMsg = 'কাজ হচ্ছে, অপেক্ষা করুন ...';
}
if ($.fn.treegrid && $.fn.datagrid){
    $.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
    $.messager.defaults.ok = 'হ্যাঁ';
    $.messager.defaults.cancel = 'না';
}
$.map(['validatebox','textbox','passwordbox','filebox','searchbox',
    'combo','combobox','combogrid','combotree',
    'datebox','datetimebox','numberbox',
    'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
    if ($.fn[plugin]){
        $.fn[plugin].defaults.missingMessage = 'ঘরটি অবশ্যই পূরণ করতে হবে ।';
    }
});
if ($.fn.validatebox){
    $.fn.validatebox.defaults.rules.email.message = 'বৈধ ইমেইল লিখুন ।';
    $.fn.validatebox.defaults.rules.url.message = 'বৈধ লিংক লিখুন ।';
    $.fn.validatebox.defaults.rules.length.message = '{0} এবং {1} এর মধ্যে একটি লিখুন ।';
    $.fn.validatebox.defaults.rules.remote.message = 'ঘরটি ঠিক করুন ।';
}
if ($.fn.calendar){
    $.fn.calendar.defaults.weeks = ['রবি','সোম','মঙ্গল','বুধ','বৃহঃ','শুক্র','শনি'];
    $.fn.calendar.defaults.months = ['জানুয়ারি', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
}
if ($.fn.datebox){
    $.fn.datebox.defaults.currentText = 'আজ';
    $.fn.datebox.defaults.closeText = 'বাতিল';
    $.fn.datebox.defaults.okText = 'ঠিক';
}
if ($.fn.datetimebox && $.fn.datebox){
    $.extend($.fn.datetimebox.defaults,{
        currentText: $.fn.datebox.defaults.currentText,
        closeText: $.fn.datebox.defaults.closeText,
        okText: $.fn.datebox.defaults.okText
    });
}
