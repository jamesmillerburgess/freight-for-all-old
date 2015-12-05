$.cssHooks.backgroundColor = {
  get: function(elem) {
    if (elem.currentStyle)
      var bg = elem.currentStyle["backgroundColor"];
    else if (window.getComputedStyle)
      var bg = document.defaultView.getComputedStyle(elem,
        null).getPropertyValue("background-color");
    if (bg.search("rgb") == -1)
      return bg;
    else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
};

$.cssHooks.textColor = {
  get: function(elem) {
    if (elem.currentStyle)
      var bg = elem.currentStyle["textColor"];
    else if (window.getComputedStyle)
      var bg = document.defaultView.getComputedStyle(elem,
        null).getPropertyValue("color");
    if (bg.search("rgb") == -1)
      return bg;
    else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
};

$.cssHooks.borderColor = {
  get: function(elem) {
    if (elem.currentStyle)
      var bg = elem.currentStyle["borderColor"];
    else if (window.getComputedStyle)
      var bg = document.defaultView.getComputedStyle(elem,
        null).getPropertyValue("border-color");
    if (bg.search("rgb") == -1)
      return bg;
    else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
};

$("#bodyBackground").change(function () {
  $("body").css('background-color', $(this).val());
});

$("#navbarBackground").change(function () {
  $(".navbar").css('background-color', $(this).val());
});

$("#navbarBorder").change(function () {
  $(".navbar").css('border-color', $(this).val());
});

$("#panelHeadingBackground").change(function () {
  $(".panel-heading").css('background-color', $(this).val());
});

$("#panelBodyBackground").change(function () {
  $(".panel-body").css('background-color', $(this).val());
});

$("#panelBorder").change(function () {
  $(".panel").css('border-color', $(this).val());
});

$("#inputBackground").change(function () {
  $(".input-group input").css('background-color', $(this).val());
});

$("#inputTextColor").change(function () {
  $(".input-group input").css('color', $(this).val());
});

$("#addonBackground").change(function () {
  $(".input-group-addon").css('background-color', $(this).val());
});

$("#iconColor").change(function () {
  $(".input-group").children("span").css('color', $(this).val());
});

$("#defaultButtonBackground").change(function () {
  $(".btn-default").css('background-color', $(this).val());
});

$("#defaultButtonTextColor").change(function () {
  $(".btn-default").css('color', $(this).val());
});

$("#defaultButtonBorder").change(function () {
  $(".btn-default").css('border-color', $(this).val());
});

$("#primaryButtonBackground").change(function () {
  $(".btn-primary").css('background-color', $(this).val());
});

$("#primaryButtonTextColor").change(function () {
  $(".btn-primary").css('color', $(this).val());
});

$("#primaryButtonBorder").change(function () {
  $(".btn-primary").css('border-color', $(this).val());
});

$("#infoButtonBackground").change(function () {
  $(".btn-info").css('background-color', $(this).val());
});

$("#infoButtonTextColor").change(function () {
  $(".btn-info").css('color', $(this).val());
});

$("#infoButtonBorder").change(function () {
  $(".btn-info").css('border-color', $(this).val());
});

$(window).load(function() {
  $("#bodyBackground").val($("body").css('backgroundColor'));

  $("#navbarBackground").val($(".navbar").css('backgroundColor'));
  $("#navbarBorder").val($(".navbar").css('borderColor'));

  $("#panelHeadingBackground").val($(".panel-heading").css('backgroundColor'));
  //$("#panelBodyBackground").val($(".panel-body").css('backgroundColor'));
  $("#panelBorder").val($(".panel").css('borderColor'));

  $("#inputBackground").val($(".input-group input").css('backgroundColor'));
  $("#inputTextColor").val($(".input-group input").css('textColor'));
  $("#addonBackground").val($(".input-group-addon").css('backgroundColor'));
  $("#iconColor").val($(".input-group").children("span").css('textColor'));

  $("#defaultButtonBackground").val($(".btn-default").css('backgroundColor'));
  $("#defaultButtonTextColor").val($(".btn-default").css('textColor'));
  $("#defaultButtonBorder").val($(".btn-default").css('borderColor'));

  $("#primaryButtonBackground").val($(".btn-primary").css('backgroundColor'));
  $("#primaryButtonTextColor").val($(".btn-primary").css('textColor'));
  $("#primaryButtonBorder").val($(".btn-primary").css('borderColor'));

  $("#infoButtonBackground").val($(".btn-info").css('backgroundColor'));
  $("#infoButtonTextColor").val($(".btn-info").css('textColor'));
  $("#infoButtonBorder").val($(".btn-info").css('borderColor'));
});

