var root = 'http://localhost:1337/';

(function() {
    var names = [
        'menu.css', 'layout.css', 'mcform.css'
    ];

	document.body.className = 'mc';
    var nodes = document.getElementsByTagName('link');
    Array.prototype.forEach.call(nodes, function (node) {
        
        var href = node.href;
        
        names.forEach(function(filename) {
            var r = new RegExp(filename + '$');
            if (r.test(href)) {
//                console.log('found the correct css, removing');
                
                var newNode = document.createElement('link');
                newNode.setAttribute('type', "text/css");
                newNode.setAttribute('rel', "stylesheet");
                newNode.setAttribute('media', "screen");
                newNode.href = root + filename;
                
                var parentNode = node.parentNode;
                parentNode.insertBefore(newNode, node);
                node.parentNode.removeChild(node);
            }
        });
    });
})();

