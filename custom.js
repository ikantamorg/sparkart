$(document).ready(function(){ //begin doc ready

/*=== REMOVE ORDER OPERATION ====================================== */
$('.remove').click(function(){
  var items = confirm('Remove Order?');
	$(this).parent().fadeTo(300,0, function() { 
	$(this).parent().slideUp();

	var removedItems = JSON.parse(localStorage.removed);
	if (!removedItems) removedItems = new Array();

	removedItems.push($(this).parent().index());
	localStorage.removed = JSON.stringify(removedItems);

	});
	return items 
	}); 

$('#undo').click(function(){
	clickCounter();
	$('.actions').animate({opacity:'1'});
	});

function clickCounter() {
	if(typeof(Storage)!=="undefined")
	{
		var removedItems = JSON.parse(localStorage.removed);
	if (removedItems) {
		$('tbody tr').eq(removedItems.pop()).fadeIn();
		localStorage.removed = JSON.stringify(removedItems);
	}
	}
	}

/*=== CALCULATION OPERATION ====================================== */
	
function sum(element){
	var sum = 0;
	var subtotal = 0;
	var parent = $(element).closest('tr');
	var total = parent.find(".total");
	parent.find('select').each(function(index, value){
	var sel = $(value);
	var val = sel.val().replace().replace(/[^0-9\.]+/g, '');
	val = parseFloat(val);

	if( !isNaN(val) ){
	sum = (parseFloat(sum) + val).toFixed(2);
	}

	});
	console.log(sum);
	total.html('$'+sum);

	$('.total').each(function(index, value){
	var sel = $(value);
	var val = sel.text().replace().replace(/[^0-9\.]+/g, '');
	val = parseFloat(val);

	if( !isNaN(val) ){
	subtotal = (parseFloat(subtotal) + val).toFixed(2);
	}
	});

	$('.subTotal').html('$'+subtotal);

	}
	
	/* main-1 */
	function getMainPrices () {
		var mainOne =  $('select[name="main-1"]');
		var mainPrice =  $('select[name="main-1"]').val();
		return mainPrice;
		//$(mainOne).parent().parent().find(".total").html(mainPrice);
	}
	
	$('select[name="main-1"]').live('change', function () {
		//getMainPrices();
		sum(this);
        });
	
	/* side-1 */
	function getSidePrices () {
		var sideOne =  $('select[name="side-1"]');
		var sidePrice =  $('select[name="side-1"]').val();
		return sidePrice;
		//$(sideOne).parent().parent().find(".total").html(sidePrice);
	}	
	
	$('select[name="side-1"]').live('change', function () {
		sum(this);
        });
		
	/* beer-1 */
	function getBeerPrices () {
		var beerOne =  $('select[name="beer-1"]');
		var beerPrice =  $('select[name="beer-1"]').val();
		return beerPrice;
		//$(beerOne).parent().parent().find(".total").html(beerPrice);
	}	
	
	$('select[name="beer-1"]').live('change', function () {
		sum(this);
        });
	
/* addnew order row */
//var count = 0;
$(function(){
	$('.add').click(function(){
	var addNewField = $('<tr><td><input type="text" name="name-1" value="Billy" /></td><td><select name="main-1"><option value="$0.00">&nbsp;</option><optgroup label="Meats &amp; Fish"><option value="$13.00">Pork Trotter Burger</option><option value="$17.00">Slow-cooked Farm Egg</option><option value="$14.00">Softshell Crab Po\'boy</option><option value="$18.00">Seared Squid</option><option value="$19.00">Blackened Catfish</option><option value="$18.00">Fried Chicken</option></optgroup><optgroup label="Vegetables"><option value="$19.00">Escarole Salad</option><option value="$17.00">Artichoke</option><option value="$19.00">Chilled Eggplant Soup</option><option value="$18.00">Roasted Beets and New Onions</option><option value="$18.00">Braised Cauliflower</option><option value="$18.00">Mushroom Dashi</option><option value="$18.00">Young Vegetables</option><option value="$18.00">New Harvest Potatoes</option></optgroup><option value="$0.00">None</option></select></td><td><select name="side-1"><option value="$7.00">Belgian-style Fries with Aioli</option><option value="$6.00">Creamed Spinach</option><option value="$4.00">Chickpea Fritters</option><option value="$4.00">Fried Feta Cheese-Stuffed Olives</option><option value="$4.00">Collard Green</option><option value="$4.00">Potato Chicharrones</option><option value="$0.00">None</option></select></td><td><select name="beer-1"><option value="$0.00">&nbsp;</option><optgroup label="Belgium"><option selected="selected" value="$9.00">St. Bernardus Abt 12</option><option value="$5.00">Saison Dupont</option><option value="$9.00">Houblon Chouffe</option><option value="$6.00">Rodenbach Grand Cru</option></optgroup><optgroup label="California"><option value="$6.00">Linden St. Common Lager</option><option value="$6.00">Speakeasy Prohibition Ale</option><option value="$4.00">Anchor Steam Beer</option><option value="$5.00">Stone IPA</option><option value="$4.00">Pyramid Hefeweizen</option></optgroup><optgroup label="Canada"><option value="$6.00">Unibroue Maudite</option><option value="$6.00">Unibroue La Fin du Monde</option><option value="$2.99">Molson Canadian</option></optgroup><option value="$0.00">None</option></select></td><td class="total">$0.00</td><td class="actions"><a class="remove" href="#">Remove</a></td></tr>')
		$('#orderTable').append(addNewField);
	});
	});
	
}); //end doc ready
