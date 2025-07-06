/*
    I took the inspiration (and source files) from this extension, made years ago:
    https://chromewebstore.google.com/detail/saucenao-fetcher/eencngjcaepgaaokekpnnabkecpfnchb

    It's going to be deprecated in a few weeks because of Manifest V3 already out, 
    so i might upgrade that one too (if allowed to do so)
*/

//Initialize the contextMenu on every right click
//I might be wrong though, and this is doing something different
chrome.contextMenus.onClicked.addListener(
    searchCodeOrTitle
)

//Open a new tab and do the search of the selected text
function searchCodeOrTitle(info, tab){
    //Get the selected text and save it
    const selected_Text = info.selectionText

    //Load the nh page with the code/title
    chrome.tabs.create({ 
        "url": "https://nhentai.net/search/?q=" + selected_Text
    }); 
}

//Removes the context menu item if nothing is selected
chrome.contextMenus.removeAll();

//Create the context menu item only on selected stuff
//I don't know what might happen if you select something else though
chrome.contextMenus.create({
    "id": "LookupText",
    "title": "Lookup '%s' on nH", 
    "contexts": [ "selection" ]
});