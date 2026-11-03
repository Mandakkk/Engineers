// program.js-ийн PROGRAM өгөгдлөөр өдөр бүрээр бүлэглэн хөтөлбөрийг харуулна.
// textContent ашигласан тул текст HTML гэж тайлбарлагдахгүй (аюулгүй).
(function () {
  var root = document.getElementById("schedule");
  var days = Array.isArray(window.PROGRAM) ? window.PROGRAM : [];

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  if (!days.length) {
    root.appendChild(el("p", "empty", "Хөтөлбөр удахгүй нэмэгдэнэ."));
    return;
  }

  days.forEach(function (day) {
    var wrap = el("div", "day");
    wrap.appendChild(el("h3", "day-title", day.title || ""));

    var list = el("ol", "schedule");

    (day.items || []).forEach(function (item) {
      var li = el("li", "slot");
      li.appendChild(el("div", "time", item.time || ""));

      var body = el("div", "");
      body.appendChild(el("h4", "", item.title || ""));
      if (item.place) body.appendChild(el("p", "place", item.place));
      if (item.note) body.appendChild(el("p", "note", item.note));

      li.appendChild(body);
      list.appendChild(li);
    });

    wrap.appendChild(list);
    root.appendChild(wrap);
  });
})();
