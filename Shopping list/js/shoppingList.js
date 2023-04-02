	$('ul').on('click','li',function(){
	$(this).toggleClass('done');
})
	$('ul').on('click','span',function(evant){
		event.stopPropagation();
		$(this).parent().fadeOut(function(){
			$(this).remove();
		})
})

$('input').keypress(function(event) {
	if(event.which === 13) {
		var itemText = $(this).val();
		$(this).val('');
		$('ul').append('<li><span><i class="fa-solid fa-skull-crossbones"></i></span> ' +itemText + '</li>');
	}
})
$('h2 span').click(function(){
	$('input').fadeToggle();
})