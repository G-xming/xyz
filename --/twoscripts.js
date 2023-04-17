    var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999,height=9999");
    w.document.write(`<html><script>alert('hi')></script></html>`);

    window.close()