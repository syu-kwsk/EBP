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

function makeTestModal(ans, msg) {
  var test_modal = new tingle.modal({
      footer:true,
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
          if ($(el.getAttribute('data-modal')).attr('class') != "test-modal") {
            continue;
          }
          else {
            //イベントをバインド
            _addTestModalEvent(test_modal, el, ans, msg);
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

function _addTestModalEvent(md, el, ans, msg){
    el.addEventListener('click', function(event){
        event.preventDefault();
        // data-modalに指定したIDの要素を取得
        var target = el.getAttribute('data-modal');
        // モーダルのコンテンツを取得
        var modalContent = document.querySelector(target);
        if(modalContent){
            // コンテンツをセット
            md.setContent("");
            md.setContent(modalContent.innerHTML);
 
            md.setFooterContent("");
            md.addFooterBtn('開ける', 'tingle-btn tingle-btn--primary', function() {
                if($('#result').text() == ans){
                  test_modal.close();
                  alert(msg);
                } else {
                  alert("開かない！！\nヒントを探そう！")
                }
            });
            // モーダルオープン
            md.open();
        }
    })
}

makeClueModal();
makeTestModal();
