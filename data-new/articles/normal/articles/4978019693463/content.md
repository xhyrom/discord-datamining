<p data-pm-slice="1 1 []"><strong>Symptoms:</strong> If you have <strong>AMD CPU </strong>or<strong> GPU</strong>, on rare occasions, Discord could stuck in <strong>RTC CONNECTING</strong> when trying to connect to a voice channel. We believe this issue mostly impacts older models. Discord in the browser has no issue connecting to voice channels.</p>
<p><strong>Reason:</strong> Discord may get stuck in initializing/querying the AMD hardware video encoder.</p>
<p><strong>Fixes:</strong></p>
<ol class="ProsemirrorEditor-list">
    <li class="ProsemirrorEditor-listItem" data-list-indent="1" data-list-type="numbered">
        <p>Please make sure that Discord is installed properly. You may try to uninstall/re-install Discord.</p>
    </li>
    <li class="ProsemirrorEditor-listItem" data-list-indent="1" data-list-type="numbered">
        <p>Please make sure that your GPU driver is up to date.</p>
    </li>
    <li class="ProsemirrorEditor-listItem" data-list-indent="1" data-list-type="numbered">
        <p>Disable "OpenH264 Video Codec provided by Cisco Systems, Inc." in Voice and Video Settings.</p>
    </li>
</ol>
<h2>How do I check my GPU driver version?</h2>
<p>Run command DxDiag. Under Display tab, it should show your GPU information along driver version.</p>
<p> </p>