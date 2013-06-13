###PrizmCloud Javascript Examples

This example allows you to display the Prizm Cloud Viewer with clickable thumbnails which update the base viewer with a new document dynamically. Multiple viewers can be on the same page.

###Prerequisites

Your *html* should have the following

* An outer wrapper element with a unique id
	```
	<div id="prizmcloud-container">...</div>
	```
* Within the outer wrapper, a wrapper for the thumbnails
	```
	<div class="documents-for-switching" id="documents-for-switching">...</div>
	```
* Within the outer wrapper, a wrapper for the Document Viewer
	```
	<div class="prizmcloud-viewer" id="prizmcloud-viewer">...</div>
	```

You need to include the appropriate js file
```
<script src="path/to/js"></script>
```

##Plain Javascript

The js file is located at javascript/prizmcloud.js

###The HTML

The html needs the following

* the wrappers as described above
* the thumbnails must be anchors, for example:
	```
	<a href="http://www.accusoft.com/docs/prizm-cloud-flash-vs-html5.pdf"><img src="http://prizmcloud.accusoft.com/img/pc-demo-pdf-thumb-1.gif" /></a>
	```
 
```
<div id="prizmcloud-container">
    <div class="documents-for-switching" id="documents-for-switching"> 
        <a href="http://www.accusoft.com/docs/prizm-cloud-flash-vs-html5.pdf" class="doc-link"><img src="http://prizmcloud.accusoft.com/img/pc-demo-pdf-thumb-1.gif" /></a>
        <a href="http://www.cdc.gov/phpr/documents/11_225700_A_Zombie_Final.pdf" class="doc-link"><img src="http://prizmcloud.accusoft.com/img/pc-demo-pdf-thumb-3.gif" /></a>
    </div>
    <div class="prizmcloud-viewer" id="prizmcloud-viewer">
        <iframe id="viewerBox" width="420" height="450" frameborder="0" src="http://connect.ajaxdocumentviewer.com/?key=03232898832&viewertype=html5&document=http://www.accusoft.com/docs/prizm-cloud-flash-vs-html5.pdf&viewerheight=600&viewerwidth=400&printButton=Yes&toolbarColor=CCCCCC&cache=yes"></iframe>
    </div>
</div>
```
###To Initialize your viewer

You can add this code, for example, to a js file and include after the prizmcloud.js or within a window.onload event

```
var first_viewer = new PrizmCloudViewer("documents-for-switching", "prizmcloud-viewer");
first_viewer.options = {
    type: 'html5',
    vwidth: 450,
    vheight: 450
};
first_viewer.initialize();
```

**Instantiate a new Prizm Cloud object**

```
var first_viewer = new PrizmCloudViewer("documents-for-switching", "prizmcloud-viewer");
```

The PrizmCloudViewer function takes two parameters: 

* unique id for the thumbnail wrapper and 
* unique id for the viewer wrapper

**Set your options using:**

```
element.options = {
	key: 'value',
	key: 'value'
}
```

**Initialize the viewer**

```
element.initialize();
```

##jQuery

The js file is located at jquery/jquery.prizmcloud.js. Add this script to your header or footer of your page.
```
<script src="jquery.prizmcloud.js"></script>
```

###The HTML

```
<div id="prizmcloud-container">
    <div class="documents-for-switching" id="documents-for-switching"> 
        <a href="http://www.accusoft.com/docs/prizm-cloud-flash-vs-html5.pdf" class="doc-link"><img src="http://prizmcloud.accusoft.com/img/pc-demo-pdf-thumb-1.gif" /></a>
     <a href="http://www.cdc.gov/phpr/documents/11_225700_A_Zombie_Final.pdf" class="doc-link"><img src="http://prizmcloud.accusoft.com/img/pc-demo-pdf-thumb-3.gif" /></a>
    </div>
    <div class="prizmcloud-viewer" id="prizmcloud-viewer">
        <iframe id="viewerBox" width="100%" height="650" frameborder="0" src="http://connect.ajaxdocumentviewer.com/?key=03232898832&viewertype=html5&document=http://www.accusoft.com/docs/prizm-cloud-flash-vs-html5.pdf&viewerheight=600&viewerwidth=660&printButton=Yes&toolbarColor=CCCCCC&cache=yes"></iframe>
    </div>
</div>
```