
$("input").change(function(){
    var inp = $(this).val()
    $("ul").append(`<li>${inp}  <i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pencil"></i> </li>`)
    $(this).val(" ")
})

$("ul").on("click" , ".fa-trash", function(){
    $(this).parent("li").fadeOut(200)
})

$("ul").on("click" , '.fa-pencil', function(){
    $(this).parent("li").toggleClass("mark")
})