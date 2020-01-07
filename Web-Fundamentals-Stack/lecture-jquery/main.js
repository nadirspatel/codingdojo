<script>
    $(document).ready(function(){
        var btn = $("btn");
        btn.click(function () {
            var container = $("#container");
            container.css("backgroundColor", "purple");
            btn.hide(); // hides the button
            // btn.remove(); // removes the button
            // btn.after("<p>Hello this adds content after</p>"); // 
        })
    })
</script>