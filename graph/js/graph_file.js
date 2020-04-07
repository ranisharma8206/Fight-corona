// Inspiration: https://tympanus.net/codrops/2012/10/04/custom-drop-down-list-styling/

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
        });
        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            opt.siblings().removeClass('selected');
            opt.filter(':contains("' + obj.val + '")').addClass('selected');
        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    var dd1 = new DropDown($('#noble-gases'));
    var dd2 = new DropDown($('#graph-type'));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $('.wrap-drop').removeClass('active');
    });
});
var element = document.querySelector("body");

var open = true;
$("#sidebar-btn").click(function(){

  element.requestFullscreen()
  .then(function() {
  	// element has entered fullscreen mode successfully
  })
  .catch(function(error) {
  	// element could not enter fullscreen mode
  	// error message
  	console.log(error.message);
  });

  if(open == true){
    $("#sidebar").animate({right:'-290px'});
    open = false;
  }else{
    $("#sidebar").animate({right:'0px'});
    open = true;
  }

  console.log("clicked");
});


var graph="world";
function setWorld()
{
  $("#world").addClass("selected");
  $("#india").removeClass("selected");
  $("#checkboxs").html(`
  <div style="font-size:20px;margin-right: 35px;margin-bottom: 10px;" class="pretty p-default p-fill">
       <input id="India" type="checkbox" />
       <div style="width: 100px;" class="state p-info">
           <label>India</label>
       </div>
   </div>
   <div style="font-size:20px;margin-bottom: 10px;" class="pretty p-default p-fill">
        <input id="China" type="checkbox" />
        <div style="width: 100px;" class="state p-info">
            <label>China</label>
        </div>
    </div><br>

   <div style="font-size:20px;margin-right: 25px; margin-bottom: 10px;" class="pretty p-default p-fill">
        <input id="southKorea" type="checkbox" />
        <div style="width: 100px;" class="state p-info">
            <label>South Korea</label>
        </div>
    </div>
    <div style="font-size:20px;  margin-bottom: 10px; margin-left:10px;"  class="pretty p-default p-fill">
         <input id="US" type="checkbox" />
         <div style="width: 100px;" class="state p-info">
             <label>U.S.A</label>
         </div>
     </div><br>
     <div style="font-size:20px;margin-right: 35px;  margin-bottom: 10px;" class="pretty p-default p-fill">
          <input id="Italy" type="checkbox" />
          <div style="width: 100px;" class="state p-info">
              <label>Italy</label>
          </div>
      </div>
      <div style="font-size:20px;  margin-bottom: 10px;" class="pretty p-default p-fill">
           <input id="Spain" type="checkbox" />
           <div style="width: 100px;" class="state p-info">
               <label>Spain</label>
           </div>
       </div><br>
       <div style="font-size:20px;margin-right: 35px;margin-bottom: 10px;" class="pretty p-default p-fill">
            <input id="UK"  type="checkbox" />
            <div style="width: 100px;" class="state p-info">
                <label>U.K</label>
            </div>
        </div>
        <div style="font-size:20px;margin-bottom: 10px;" class="pretty p-default p-fill">
             <input id="Iran" type="checkbox" />
             <div style="width: 100px;" class="state p-info">
                 <label>Iran</label>
             </div>
         </div><br>
         `);
  graph="world"
}
function setIndia()
{
  $("#india").addClass("selected");
  $("#world").removeClass("selected");
  $("#checkboxs").html(`
  <div style="font-size:20px;margin-right: 35px;margin-bottom: 10px;" class="pretty p-default p-fill">
       <input type="checkbox" />
       <div style="width: 100px;" class="state p-info">
           <label>Maharashtra</label>
       </div>
   </div>
   <div style="font-size:20px;margin-bottom: 10px;" class="pretty p-default p-fill">
        <input type="checkbox" />
        <div style="width: 100px;" class="state p-info">
            <label>Delhi</label>
        </div>
    </div><br>

   <div style="font-size:20px;margin-right: 25px; margin-bottom: 10px;" class="pretty p-default p-fill">
        <input type="checkbox" />
        <div style="width: 100px;" class="state p-info">
            <label>Telengana</label>
        </div>
    </div>
    <div style="font-size:20px;  margin-bottom: 10px; margin-left:10px;"  class="pretty p-default p-fill">
         <input type="checkbox" />
         <div style="width: 100px;" class="state p-info">
             <label>U.P</label>
         </div>
     </div><br>

         `);
  graph="india"
}


function draw()
{

}

$("document").ready(()=>
  {
    setWorld();
  }
);
