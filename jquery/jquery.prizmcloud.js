/*
 * jQuery plugin to display Prizm Cloud Document Viewer
 * with clickable thumbnails that dynamically update viewer
 * with new document
 *
 * Plugin url: www.prizmcloud.accusoft.com
 * Author: Accusoft
 * Author url: www.accusoft.com
 *
 * Structure example
 * <div with "your container id">
 *     <div "container for document links">
 *        <a href="http://path/to/document" class="doc-links"></a>
 *    </div>
 *    <div "container for viewer"></div>
 * </div>
 * script $ ("your container id").prizmcloud({ key: "", vwidth: 650, vheight: 700 });
 */
(function ($) {
    $.fn.prizmcloud = function (options) {

        // extend default options.
        var opts = $.extend({}, $.fn.prizmcloud.defaults, options);
        var base_url = "http://connect.ajaxdocumentviewer.com/?key=";

        bindClicks(this);

        function bindClicks(obj) {
            var $docs_container = $(opts.documents_container);
            obj.children($docs_container).children('.doc-link').each(function () {

                $(this).on('click', function (e) {
                    e.preventDefault();
                    var $link = $(this);
                    // don't reload active document
                    if(!$link.hasClass('active'))
                    {
                        $link.parent().find('.doc-link').removeClass('active');
                        $link.addClass('active');
                        var docurl = "&document=" + $(this).prop('href');
                        
                        var viewer_iframe = "<iframe id=\"prizmcloud-iframe\" width=\"" + (opts.vwidth + 20) + "\" height=\"" + (opts.vheight + 20) + "\" frameborder=\"0\" seamless src=\"" + base_url + opts.key + docurl + "&viewerheight=" + opts.vheight + "&viewerwidth=" + opts.vwidth + "&viewertype=" + opts.type + "&printButton=" + opts.print_button + "&toolbarColor=" + opts.toolbar_color + "&cache=" + opts.cache + "\"></iframe>"; 
                        obj.children(opts.viewer_container).html(viewer_iframe);
                    }
                    return false;
                });
            });
        }
    };
    $.fn.prizmcloud.defaults = {
        // These are the defaults.
        key: "03232898832",      // your PrizmCloud Key, this is required
        type: "html5",           // html5 or flash
        vwidth: 600,             // viewer width
        vheight: 600,            // viewer height
        print_button: "Yes",     // Yes or No
        toolbar_color: "CCCCCC", // hex color
        documents_container: "#documents-for-switching", // can be a class or id
        viewer_container: "#prizmcloud-viewer",          // can be a class or id
        cache: "yes"                                     // yes or no
    };
}(jQuery));