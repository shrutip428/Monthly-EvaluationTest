$(document).ready(function validate(){
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    });
    jQuery.validator.addMethod("tntraemail", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.-]+@+tntra.io*$/i.test(value);
    });
    jQuery.validator.addMethod("phnumber", function(value, element) {
        return this.optional(element) || /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/i.test(value);
    });

    $(".cb").on('change', function (){
      // $(this).parent().parent().parent().parent().find('input', 'cb').prop("checked", true);
      // var div = $(this).parent().parent().parent().parent();
      // $($(this).parent().parent().parent().parent().find('input', 'cb')).is(":checked") ? div.addClass("blue") : div.removeClass("blue");
      debugger
      var price = 0;
      var qnty = 0;
      var total = 0;
      $(".cb:checked").each(function() {
        price = parseInt($(this).val());
        qnty = parseInt($(this).parent().siblings().find('select', 'dropdownlist').val());
        var amount = (qnty*price);
        total+=amount;
      });
      if (total == 0) {
        $('#value').html("$0.00");
      } else {				
        $('#value').html(total);
      }
    });
    $("input[name=gift]").change(function(){
        var varChange = $('input[name=gift]:checked').val();
        if (varChange == 'yes') {
            $('#div').show();
        }
        else {
             $('#div').hide();
            }
      });

      $('#cb2').click(function(){ 
        if ($('#cb2').is(":checked")) {
         $('#add2line1').val($('#add1line1').val());
         $('#add2line2').val($('#add1line2').val());
         $('#city2').val($('#city1').val());
         $('#state2').val($('#state1').val());
         $('#zip2').val($('#zip1').val());
         var c = $('#country1 option:selected').val();
         $('#country2 option[value=' + c + ']').attr('selected','selected');
        } 
        else { 
         $('#add2line1').val("");
         $('#add2line2').val("")
         $('#city2').val("");
         $('#state2').val("");
         $('#zip2').val("");
         $('#country2 option[value=""]').attr('selected','selected');
        };
       });

       $('select').change(function(){
        var sum = 0;
        $('select :selected').each(function() {
            sum += Number($(this).val());
        });
         $("#sum").html(sum);
    });
 
     $("#form").validate({
        rules:{
            ccfname: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            cclname: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            fname1: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            lname1: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            email:{
                required: true,
                tntraemail : true,
            },
            number1: {
                required: true,
                minlength: 10,
                number: true,
                phnumber:true,
                minlength:10,
                maxlength:10,
            },
            add1line1: {
                required: true,
                maxlength: 30,
            },
            add1line2: {
                required: true,
                maxlength: 30,
            },
            city1:{
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            state1:{
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            zip1: {
                required: true,
                minlength: 6,
                number: true,
                maxlength:6,
            },
            country1: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            gift: {
                required:true,
            },
            fname2: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            lname2: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            number2: {
                required: true,
                minlength: 10,
                number: true,
                phnumber:true,
                minlength:10,
                maxlength:10,
            },
            add2line1: {
                required: true,
                maxlength: 30,
            },
            add2line2: {
                required: true,
                maxlength: 30,
            },
            city2:{
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            state2:{
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            zip2: {
                required: true,
                minlength: 6,
                number: true,
                maxlength:6,
            },
            country2: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            request: {
                lettersonly: true,
                required: true,
                maxlength: 30,
            },

        },
        messages: {
            ccfname: {
                required: "please enter your credit card first name",
                lettersonly: "Please enter characters only",
            },
            cclname: {
                required: "please enter your credit card last name",
                lettersonly: "Please enter characters only",
            },
            fname1: {
                required: "please enter your first name",
                lettersonly: "Please enter characters only",
            },
            lname1: {
                required: "please enter your last name",
                lettersonly: "Please enter characters only",
            },
            email: {
                required: "please enter your email address",
                tntraemail : "Please enter valid tntra email format",
            },
            number1: {
                required: "please enter contact number",
                minlength: "contact number needs atleast 10 numeric values",
                number: "Only numeric value accepted" ,
                phnumber: "Please enter number starting with 789",
            },
            add1line1: {
                required: "Please add your billing address in address line 1",
            },
            add1line2: {
                required: "Please add your billing address in address line 2",
            },
            city1: {
                required: "please enter your ciy name",
                lettersonly: "Please enter characters only",
            },
            state1: {
                required: "please enter your state name",
                lettersonly: "Please enter characters only",
            },
            zip1: {
                required: "please enter your postal code",
                minlength: "postal code needs atleast 6 numeric values",
                number: "Only numeric value accepted" ,
            },
            country1: {
                required: "please enter your country name",
                lettersonly: "Please enter characters only",
            },
            gift: {
                required:"You must select either yes or no",
            },
            fname2: {
                required: "please enter your first name",
                lettersonly: "Please enter characters only",
            },
            lname2: {
                required: "please enter your last name",
                lettersonly: "Please enter characters only",
            },
            number2: {
                required: "please enter contact number",
                minlength: "contact number needs atleast 10 numeric values",
                number: "Only numeric value accepted" ,
                phnumber: "Please enter number starting with 789",
            },
            add2line1: {
                required: "Please add your billing address in address line 1",
            },
            add2line2: {
                required: "Please add your billing address in address line 2",
            },
            city2: {
                required: "please enter your ciy name",
                lettersonly: "Please enter characters only",
            },
            state2: {
                required: "please enter your state name",
                lettersonly: "Please enter characters only",
            },
            zip2: {
                required: "please enter your postal code",
                minlength: "postal code needs atleast 6 numeric values",
                number: "Only numeric value accepted" ,
            },
            country2: {
                required: "please enter your country name",
                lettersonly: "Please enter characters only",
            },
            request: {
                required: "please enter some request",
            },

        },

    });


    //input data is printed to the redirected page:
        var data = " ";
        $("#btnsubmit").bind("click", function(){
            var d1 = $("#item1").val();
            localStorage.setItem("i1",d1);
            var d2 = $("#size1").val();
            localStorage.setItem("si1",d2);
            var d3 = $("#item2").val();
            localStorage.setItem("i2",d3);
            var d4 = $("#clr").val();
            localStorage.setItem("clr2",d4);
            var d5 = $("#size2").val();
            localStorage.setItem("si2",d5);
            var d6 = $("#item3").val();
            localStorage.setItem("i3",d6);
            var d7 = $("#size3").val();
            localStorage.setItem("si3",d7);
            var d8 = $("#ccfname").val();
            localStorage.setItem("ccf1",d8);
            var d9 = $("#value").val();
            localStorage.setItem("total1",d9);
            var d10 = $("#cclname").val();
            localStorage.setItem("ccl1",d10);
            var d11 = $("#fname1").val();
            localStorage.setItem("f1",d11);
            var d12= $("#lname1").val();
            localStorage.setItem("l1",d12);
            var d13 = $("#email").val();
            localStorage.setItem("em1",d13);
            var d14 = $("#number1").val();
            localStorage.setItem("cn1",d14);
            var d15 = $("#add1line1").val();
            localStorage.setItem("street1",d15);
            var d16 = $("#add1line2").val();
            localStorage.setItem("street2",d16);
            var d17 = $("#city1").val();
            localStorage.setItem("ct1",d17);
            var d18 = $("#state1").val();
            localStorage.setItem("st1",d18);
            var d19 = $("#zip1").val();
            localStorage.setItem("z1",d19);
            var d20 = $("#country1").val();
            localStorage.setItem("count1",d20);
            var d21 = $('input[name="gift"]:checked').val();
            localStorage.setItem("gift2",d21);
            var d22 = $("#fname2").val();
            localStorage.setItem("f2",d22);
            var d23 = $("#lname2").val();
            localStorage.setItem("l2",d23);
            var d24 = $("#number2").val();
            localStorage.setItem("cn2",d24);
            var d25 = $("#cb2").val();
            localStorage.setItem("same",d25);
            var d26 = $("#add2line1").val();
            localStorage.setItem("street3",d26);
            var d27 = $("#add2line2").val();
            localStorage.setItem("street4",d27);
            var d28 = $("#city2").val();
            localStorage.setItem("ct2",d28);
            var d29 = $("#state2").val();
            localStorage.setItem("st2",d29);
            var d30 = $("#zip2").val();
            localStorage.setItem("z2",d30);
            var d31 = $("#country2").val();
            localStorage.setItem("count2",d31);
            var d32 = $("#request").val();
            localStorage.setItem("request2",d32);
            

  


            data = data + "<tr><td>" + d1 + "</td><td>"+ d2 +"</td><td>" + d3 +"</td><td>" + d4 +"</td><td>" + d5 +"</td><td>" + d6 +"</td><td>" + d7 +"</td><td>" + d8 +"</td><td>" + d9 +"</td><td>" + d10 +"</td><td>" + d11 +"</td><td>" + d12 +"</td><td>" + d13 + "</td><td>"+ d14 +"</td><td>" + d15 +"</td><td>" + d16 +"</td><td>" + d17 +"</td><td>" + d18 +"</td><td>" + d19 +"</td><td>" + d20 +"</td><td>" + d21 +"</td><td>" + d22 +"</td><td>" + d23 +"</td><td>" + d24 +"</td><td>" + d25 +"</td><td>" + d26 +"</td><td>" + d27 +"</td><td>" + d28 +"</td><td>" + d29 +"</td><td>" + d30 +"</td><td>" + d31 +"</td><td>" + d32 +"</td></tr>";

            $("#output").html(data);
        });
        
        
});
