function makeClueModal() {
  var clue_modal = new tingle.modal({
      beforeClose: function() {
          return true; // close the modal
      }
  });

  // data-modal属性を持つトリガーボタンを取得
  var modalTrigger = document.querySelectorAll('[data-modal]');
  if(modalTrigger.length > 0){
      for (let i = 0; i < modalTrigger.length; i++) {
          var el = modalTrigger[i];
          //console.log($(el.getAttribute('data-modal')).attr('class'));
          if ($(el.getAttribute('data-modal')).attr('class') != "clue-modal") {
            continue;
          }
          else {
            //イベントをバインド
            _addClueModalEvent(clue_modal, el);
          }
      }
  }
}

function _addClueModalEvent(md, el){
    el.addEventListener('click',function(event){
        event.preventDefault();
        // data-modalに指定したIDの要素を取得
        var target = el.getAttribute('data-modal');
        // モーダルのコンテンツを取得
        var modalContent = document.querySelector(target);
        if(modalContent){
            // コンテンツをセット
            md.setContent("");
            md.setContent(modalContent.innerHTML);
            // モーダルオープン
            md.open();
        }
    })
}

function makeTestModal(id, ans, msg) {
  var test_modal = new tingle.modal({
      footer:true,
      beforeClose: function() {
          return true; // close the modal
      }
  });

  // data-modal属性を持つトリガーボタンを取得
  var target = '#'+id;
  var el = document.querySelector('#tri_'+id);
  //イベントをバインド
  _addTestModalEvent(test_modal, el, target, ans, msg);
}

function _addTestModalEvent(md, el, target, ans, msg){
    el.addEventListener('click', function(event){
        event.preventDefault();
        // data-modalに指定したIDの要素を取得
        //var target = el.getAttribute('data-modal');
        // モーダルのコンテンツを取得
        var modalContent = document.querySelector(target);
        if(modalContent){
            // コンテンツをセット
            md.setContent("");
            md.setContent(modalContent.innerHTML);
 
            md.setFooterContent("");
            md.addFooterBtn('開ける', 'tingle-btn tingle-btn--primary', function() {
                if($('#result').text() == ans){
                  md.close();
                  alert(msg);
                  window.location.href='end';
                } else {
                  md.close()
                  alert("出力が間違っているようだ。。\nヒントを探そう！")
                }
            });
            // モーダルオープン
            md.open();
        }
    })
}

makeClueModal();
makeTestModal('door_modal', 'HelloWorld\n', '「printで出力」を手に入れた');
