/* global pageFunctions */

pageFunctions.functionality = (function(){
    var init = (function(){
        listeners();
        $('#one').addClass('active');
        date = new Date(parseInt(Date.now()));
        addDate = dateToFormat(date);
        if(addDate>6 && addDate<=15){
            shift = 'AM';
            operator = "PK";
        } else if (addDate>15 && addDate<21){
            shift = 'PM';
            operator = "MP";
        } else {
            shift = 'NS';
            operator = "IC";
        }
    });
    var menuVisible = 0;
    var tableDivVis = 0;
    var historyTableDivVis = 0;
    var type = "";
    var finish = "";
    var defect = "";
    var depart = "";
    var addDate = "";
    var shift = "";
    var machine = "";
    var operator = "";
    var correct = "";
    var qty = 1;
    var listeners = (function(){
        $('#menuPosList').on('click', function(){
            if(tableDivVis == 0){
                if(historyTableDivVis == 1){
                    historyTableDivVis = 0;
                    $('#historyTableDiv').addClass('hidden');
                }
                getRecords();
                $('#menuTrigger').addClass('triggerUnclicked');
                $('#menuTrigger').removeClass('triggerClicked');
                $('#menu').removeClass('menuShow');
                $('#menu').addClass('menuHide');
                menuVisible = 0;
                $('#tableDiv').removeClass('hidden');
                tableDivVis = 1;
            } else {
                $('#menuTrigger').addClass('triggerUnclicked');
                $('#menuTrigger').removeClass('triggerClicked');
                $('#menu').removeClass('menuShow');
                $('#menu').addClass('menuHide');
                menuVisible = 0;
                $('#tableDiv').addClass('hidden');
                tableDivVis = 0;
            }
        });
        $('#menuPosListHistory').on('click', function(){
            if(historyTableDivVis == 0){
                if(tableDivVis == 1){
                    tableDivVis = 0;
                    $('#tableDiv').addClass('hidden');
                }
                getHistoryRecords();
                $('#menuTrigger').addClass('triggerUnclicked');
                $('#menuTrigger').removeClass('triggerClicked');
                $('#menu').removeClass('menuShow');
                $('#menu').addClass('menuHide');
                menuVisible = 0;
                $('#historyTableDiv').removeClass('hidden');
                historyTableDivVis = 1;
            } else {
                $('#menuTrigger').addClass('triggerUnclicked');
                $('#menuTrigger').removeClass('triggerClicked');
                $('#menu').removeClass('menuShow');
                $('#menu').addClass('menuHide');
                menuVisible = 0;
                $('#historyTableDiv').addClass('hidden');
                historyTableDivVis = 0;
            }
        });
        $('#menuTrigger').on('click', function(){
            if(menuVisible == 1){
                $('#menuTrigger').addClass('triggerUnclicked');
                $('#menuTrigger').removeClass('triggerClicked');
                $('#menu').removeClass('menuShow');
                $('#menu').addClass('menuHide');
                menuVisible = 0;
            } else {
                $('#menuTrigger').addClass('triggerClicked');
                $('#menuTrigger').removeClass('triggerUnclicked');
                $('#menu').addClass('menuShow');
                $('#menu').removeClass('menuHide');
                menuVisible = 1;
            }
        });
        $('.caseType').on('click', function(){
            $('.caseType').attr('disabled', true);
            $('#glossOrMatt').removeClass('hidden');
        });
        $('.caseTypeOne').on('click', function(){
            $('.caseType').attr('disabled', true);
            $('#defectSelect').removeClass('hidden');
            finish = "";
        });
        $('.finishType').on('click', function(){
            $('.finishType').attr('disabled', true);
            $('#defectSelect').removeClass('hidden');
        });

        $('#ip4').on('click', function(){
            type="iPhone 4";
            depart="3D";
            machine = "Indexer";
        });
        $('#ip4t').on('click', function(){
            type="iPhone 4 Tough";
            depart="3D";
            machine = "TIA 2";
        });
        $('#ip5').on('click', function(){
            type="iPhone 5";
            depart="3D";
            machine = "Indexer";
        });
        $('#ip5t').on('click', function(){
            type="iPhone 5 Tough";
            depart="3D";
            machine = "Indexer";
        });
        $('#ip5c').on('click', function(){
            type="iPhone 5c";
            depart="3D";
            machine = "Indexer";
        });
        $('#ip6').on('click', function(){
            type="iPhone 6";
            depart="3D";
            machine = "Indexer";
        });
        $('#ip6t').on('click', function(){
            type="iPhone 6 Tough";
            depart="3D";
            machine = "Indexer";
        });
        $('#ip6pt').on('click', function(){
            type="iPhone 6+ Tough";
            depart="3D";
            machine = "TIA 1";
        });
        $('#ip7').on('click', function(){
            type="iPhone 7";
            depart="3D";
            machine = "TIA 2";
        });
        $('#ip7pt').on('click', function(){
            type="iPhone 7+ Tough";
            depart="3D";
            machine = "TIA 1";
        });
        $('#ip8').on('click', function(){
            type="iPhone 8";
            depart="3D";
            machine = "TIA 1";
        });
        $('#gs3').on('click', function(){
            type="Galaxy S3";
            depart="3D";
            machine = "TIA 3";
        });
        $('#gs4').on('click', function(){
            type="Galaxy S4";
            depart="3D";
            machine = "TIA 3";
        });
        $('#gs5').on('click', function(){
            type="Galaxy S5";
            depart="3D";
            machine = "TIA 3";
        });
        $('#gs6t').on('click', function(){
            type="Galaxy S6 Tough";
            depart="3D";
            machine = "TIA 1";
        });
        $('#gs7').on('click', function(){
            type="Galaxy S7";
            depart="3D";
            machine = "TIA 3";
        });
        $('#gs8').on('click', function(){
            type="Galaxy S8";
            depart="3D";
            machine = "TIA 2";
        });
        $('#ipadMini').on('click', function(){
            type="iPad Mini";
            depart="3D";
            machine = "TIA 1";
        });
        $('#ipad').on('click', function(){
            type="iPad";
            depart="3D";
            machine = "TIA 2";
        });
        $('#ipadMiniSmart').on('click', function(){
            type="iPad Mini Smartcover";
            depart="2D";
            machine = "Mimaki 1";
        });
        $('#ipadAirSmart').on('click', function(){
            type="iPad Air Smartcover";
            depart="2D";
            machine = "Mimaki 2";
        });
        $('#ipadSmart').on('click', function(){
            type="iPad Smartover";
            depart="2D";
            machine = "Mimaki 2";
        });
        $('#ip5cclear').on('click', function(){
            type="iPhone 5c clearcase";
            depart="2D";
            machine = "Mimaki 1";
        });

        $('#gloss').on('click', function(){
            finish="GLOSS";
        });
        $('#matt').on('click', function(){
            finish="MATT";
        });

        $('#spot').on('click', function(){
            defect="spots";
            correct = "reprint";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#band').on('click', function(){
            defect="banding";
            correct = "reprint";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#alig').on('click', function(){
            defect="alignment";
            correct = "adjusted by operator";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#brok').on('click', function(){
            defect="production failure";
            correct = "reprint";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#whit').on('click', function(){
            defect="white edges";
            correct = "reprint";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#supp').on('click', function(){
            defect="supplier issue";
            correct = "NA";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#canc').on('click', function(){
            defect="cancelled";
            correct = "NA";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#creat').on('click', function(){
            defect="creation issue";
            correct = "cancelled";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#colo').on('click', function(){
            defect="colourmetric";
            correct = "reprint";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#melt').on('click', function(){
            defect="melted during cooking";
            correct = "reprint";
            action='record';
            $('#myConfirmMessage').html('Do you really want add record?<br>'+shift+' '+depart+' '+operator+' '+type+' -'+finish+'- '+defect+' Qty:'+qty+' '+machine);
            $('#myConfirmContainer').removeClass('hidden');
        });

        $('.qtyBtt').on('click', function(){
            $('.qtyBtt').removeClass('active');
        });
        $('#one').on('click', function(){
            $('#one').addClass('active');
            qty = 1;
        });
        $('#two').on('click', function(){
            $('#two').addClass('active');
            qty = 2;
        });
        $('#three').on('click', function(){
            $('#three').addClass('active');
            qty = 3;
        });
        $('#four').on('click', function(){
            $('#four').addClass('active');
            qty = 4;
        });
        $('#fife').on('click', function(){
            $('#fife').addClass('active');
            qty = 5;
        });
        $('#six').on('click', function(){
            $('#six').addClass('active');
            qty = 6;
        });
        $('#seven').on('click', function(){
            $('#seven').addClass('active');
            qty = 7;
        });
        $('#eight').on('click', function(){
            $('#eight').addClass('active');
            qty = 8;
        });
        $('#nine').on('click', function(){
            $('#nine').addClass('active');
            qty = 9;
        });
        $('#myConfirmAbort').on('click', function(){
            $('#myConfirmContainer').addClass('hidden');   
        });
        $('.defectType').on('click', function(){
            $('#defectSelect').addClass('hidden');
            $('#glossOrMatt').addClass('hidden');
            $('.caseType').attr('disabled', false);
            $('.finishType').attr('disabled', false);
            date = new Date(parseInt(Date.now()));
            addDate = dateToFormat(date);
            if(addDate>6 && addDate<=15){
                shift = 'AM';
                operator = "PK";
            } else if (addDate>15 && addDate<21){
                shift = 'PM';
                operator = "MP";
            } else {
                shift = 'NS';
                operator = "IC";
            }
            $('.qtyBtt').removeClass('active');
            $('#one').addClass('active');
            qty = 1;
        });
        $('#menuPosGenerateReport').on('click', function(){
            action='report';
            $('#myConfirmMessage').html('Send records to uk3dsublimation@photobox.com and move records to history table?');
            $('#myConfirmContainer').removeClass('hidden');
        });
        $('#myConfirmConfirm').on('click', function(){
            confirmAccept();
        });
        $('#cancelAdd').on('click', function(){
            $('#glossOrMatt').addClass('hidden');
            $('#defectSelect').addClass('hidden');
            $('.caseType').attr('disabled', false);
            $('.finishType').attr('disabled', false);
        });
        
    });
    var confirmAccept = function(){
        if(action == 'report'){
            sendReport();
            $('#myConfirmContainer').addClass('hidden');
        } else if(action == 'record'){
            addRecordToDB();            
            $('#myConfirmContainer').addClass('hidden');
        }
    };

    var sendReport = (function(){
        var email = {};
        $.ajax({
            type: 'POST',
            async: false,
            dataType: 'json',
            url: 'PHP/getRecords.php',            
            success: function(data){
                console.log('test');
                email['content'] = createRecordsTableContentEmail(data);
                $.ajax({
                    type: 'POST',
                    async: true,
                    data: email,
                    dataType: 'json',
                    url: 'PHP/sendReport.php',            
                });                    
            }
        });
    });

    var getRecords = (function(){
        $.ajax({
            type: 'POST',
            async: false,
            dataType: 'json',
            url: 'PHP/getRecords.php',            
            success: function(data){
                $('#recordTabContent').html(createRecordsTableContent(data));
            }
        });
    });

    var getHistoryRecords = (function(){
        $.ajax({
            type: 'POST',
            async: false,
            dataType: 'json',
            url: 'PHP/getHistoryRecords.php',            
            success: function(data){
                $('#historyRecordTabContent').html(createRecordsTableContent(data));
            }
        });
    });

    var createRecordsTableContent = (function(data){
        var ans = '';
        var str = '';
        $.each(data,function(index, value){
            str = value['date'].toString();
            str = str.substring(0,10);
            ans += "<tr>\n\
                        <td class='DocCol1b'>"+str+"</td>\n\
                        <td class='DocCol3b'>"+value['shift']+"</td>\n\
                        <td class='DocCol2b'>"+value['department']+"</td>\n\
                        <td class='DocCol4b'>"+value['operator']+"</td>\n\
                        <td class='DocCol5b'>"+value['product']+"</td>\n\
                        <td class='DocCol6b'>"+value['reason']+"</td>\n\
                        <td class='DocCol7b'>"+value['corrective']+"</td> \n\
                        <td class='DocCol8b'>"+value['qty']+"</td>\n\
                        <td class='DocCol9b'>"+value['machine']+"</td>\n\
                    </tr>";
        });    
        return ans;
    });

    var createRecordsTableContentEmail = (function(data){
        var ans = '';
        var str = '';
        ans += '<table style="border-collapse: collapse;">';
        $.each(data,function(index, value){
            str = value['date'].toString();
            str = str.substring(0,10);
            ans += "<tr>\n\
                        <td class='col1' style='border: 1px solid black; width:100px; text-align: center;'>"+str+"</td>\n\
                        <td class='col2' style='border: 1px solid black; width:30px; text-align: center;'>"+value['shift']+"</td>\n\
                        <td class='col3' style='border: 1px solid black; width:30px; text-align: center;'>"+value['department']+"</td>\n\
                        <td class='col4' style='border: 1px solid black; width:30px; text-align: center;'>"+value['operator']+"</td>\n\
                        <td class='col5' style='border: 1px solid black; width:150px;'>"+value['product']+"</td>\n\
                        <td class='col6' style='border: 1px solid black; width:150px;'>"+value['reason']+"</td>\n\
                        <td class='col7' style='border: 1px solid black; width:150px;'>"+value['corrective']+"</td> \n\
                        <td class='col8' style='border: 1px solid black; width:30px; text-align: right;'>"+value['qty']+"</td>\n\
                        <td class='col9' style='border: 1px solid black; width:100px; text-align: center;'>"+value['machine']+"</td>\n\
                    </tr>";
            });    
            ans += '</table>';
        return ans;
    });

    var addRecordToDB = (function(){
        param = {};
        param['department'] = depart;
        param['shift'] = shift;
        param['operator'] = operator;
        param['product'] = type+' '+finish;
        param['defect'] = defect;
        param['corrective'] = correct;
        param['quantity'] = qty;
        param['machine'] = machine;
        console.log(param);
        $.ajax({
          type: 'POST',
          async: true,
          data: param,
          dataType: 'json',
          url: 'PHP/addRecord.php',            
        });
    });
    var dateToFormat = (function(date){
        var formDate;
        var hours;
        
        hours = date.getHours();
        if(hours<=9){hours = '0'+hours;}      
        
        formDate = hours;
        return formDate;
    });
    $(document).ready(function(){
        init(); 
    });
})();