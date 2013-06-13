/*
 * Javascript plugin to display Prizm Cloud Document Viewer
 * with clickable thumbnails that dynamically update viewer
 * with new document
 * 
 * Author: Accusoft
 * Plugin url: prizmcloud.accusoft.com
 * Author url: www.accusoft.com
 *
 * Structure example
 * <div with "your container id">
 *     <div "id for document links">
 *        <a href="http://path/to/document"></a>
 *    </div>
 *    <div "id for viewer"></div>
 * </div>
 * script:
 * var doc_viewer = new PrizmCloudViewer("id for thumbs", "id for viewer");
 * doc_viewer.options = { type: 'html5', vwidth: 450, vheight: 450};
 * doc_viewer.initialize();
 * 
 * @params
 * switching: id of html element that holds clickable thumbs
 * viewer: id of html element for document viewer
 */
function PrizmCloudViewer(switching, viewer) {
    var pc_this = this;
    pc_this.pc_switching = document.getElementById(switching);
    pc_this.pc_anchors = pc_this.pc_switching.getElementsByTagName("a");
    pc_this.pc_viewer = document.getElementById(viewer);
    pc_this.base_url = "http://connect.ajaxdocumentviewer.com/?key=";
    pc_this.options = {};

    pc_this.defaults = {
        // These are the defaults.
        key: "03232898832",      // your PrizmCloud Key, this is required
        type: "html5",           // html5 or flash
        vwidth: 600,             // viewer width (int)
        vheight: 600,            // viewer height (int)
        print_button: "Yes",     // Yes or No
        toolbar_color: "CCCCCC", // hex color
        cache: "yes"             // yes or no
    };

    pc_this.set_options = function () {
        for (var x in pc_this.options) {
            if (x in pc_this.defaults) {
                pc_this.defaults[x] = pc_this.options[x];
            }
        }
    };

    pc_this.build_iframe = function (doc_url) {
        var rand_num = Math.floor(Math.random() * 11);
        var v_iframe = document.createElement('iframe');
        var src_value = pc_this.base_url + pc_this.defaults.key + '&document=' + doc_url + "&viewerheight=" + pc_this.defaults.vheight + "&viewerwidth=" + pc_this.defaults.vwidth + "&viewertype=" + pc_this.defaults.type + "&printButton=" + pc_this.defaults.print_button + "&toolbarColor=" + pc_this.defaults.toolbar_color + "&cache=" + pc_this.defaults.cache;

        v_iframe.setAttribute('id', "prizmcloud-iframe-" + rand_num + "");
        v_iframe.setAttribute('width', (pc_this.defaults.vwidth + 20));
        v_iframe.setAttribute('height', (pc_this.defaults.vheight + 20));
        v_iframe.setAttribute('src', src_value);
        v_iframe.setAttribute('seamless', 'seamless');
        v_iframe.setAttribute('frameborder', 0);

        pc_this.pc_viewer.innerHTML = '';
        pc_this.pc_viewer.appendChild(v_iframe);
    };

    pc_this.bind_clicks = function () {
        for (var i = 0; i < pc_this.pc_anchors.length; i++) {
            pc_this.pc_anchors[i].onclick = function (e) {
                if (!hasClass(this, 'active')) {
                    iframe = pc_this.build_iframe(this.href);
                    pc_this.add_active_class(this);
                }
                return false;
            };
        }
    };
    pc_this.add_active_class = function (link) {
        // remove all active classes on links
        for (var i = 0; i < pc_this.pc_anchors.length; i++) {
            console.log(pc_this.pc_anchors[i]);
            if (hasClass(pc_this.pc_anchors[i], 'active')) {
                var reg = new RegExp('(\\s|^)active(\\s|$)');
                pc_this.pc_anchors[i].className = pc_this.pc_anchors[i].className.replace(reg, ' ');
            }
        }
        // add active class to current link
        link.className += " active";
    };
    hasClass = function (element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    };
}
PrizmCloudViewer.prototype.initialize = function () {
    this.set_options();
    this.bind_clicks();
};