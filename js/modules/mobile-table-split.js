/**!
	Module table split
	Split the column in other table

	@contributors: Guillaume Focheux (Alsacréations)
	@date-created: 2015-07-01
	@last-update: 2015-07-01
 */

/*;(function($) {
   
    function extractAllColumns( $table ){
        var nbColumn = $table.find('th').length;
        var arrayColumn = [];
        $table.find('th').each( function(){
            // Add th in the array
            arrayColumn[$(this).index()] = [$(this).html()];
        });

        for (var i = 0; i < nbColumn + 1; i++) {
            $table.find("tr td:nth-child("+i+")")
            .each( function(j){
                // Add td in the array
                arrayColumn[$(this).index()][parseInt(j+1)]= $(this).html();
            });
        }
        return arrayColumn;
    }

    function makeNewTable( tableArray , $table){

        var doc = document;
        var arrayTableHtml = [];
        $.each( tableArray, function(a){
            var arrayTmp = this;
            var thead = doc.createElement("thead");
            var tbody = doc.createElement("tbody");
            for (i = 0; i < arrayTmp.length ; i++) {
                var tr = doc.createElement("tr");
                if( i > 0){
                    var td = doc.createElement("td");
                    td.innerHTML = this[i];
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                } else {
                    var th = doc.createElement("th");
                    th.innerHTML = this[i];
                    tr.appendChild(th);
                    thead.appendChild(tr);
                }
            }
            var tableTmp = doc.createElement("table");
            tableTmp.appendChild(thead);
            tableTmp.appendChild(tbody);
            arrayTableHtml[a]= tableTmp;

        });
        arrayTableHtml.reverse();
        $.each( arrayTableHtml , function(){
            $(this).insertAfter($table);
        });
    }

    //Table Selector for container provide by wysiwyg
    $('.article-content table').each(function(){
        var tableArray = extractAllColumns( $(this) );
        makeNewTable(tableArray, $(this));
        $(this).hide();
    });
})(jQuery);
*/ 