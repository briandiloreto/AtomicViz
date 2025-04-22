<p align="center">
  <img src="media/logo_128.png" alt="AtomicViz logo" />
</p>

# AtomicViz

**AtomicViz** builds a visual map of your codebase, giving you a clearer understanding of its architecture, and making navigation easier.

* Select a set of files to generate an interactive code diagram
* Generate a graph of a function call hierarchy
* Customize graphs to show only the classes and functions that are relevant to the task at hand
* Use the integrated outline view which mirrors the graph and improves navigation
* Works with Typescript, Javascript, Python, Java, C++, C#, and other major languages
* **Video overview**: https://youtu.be/ZsFmE1eRgh4
* **Video detail**: https://www.youtube.com/watch?v=ZsDd4Q4E81I


![Layout by file/folder](media/gif_layout_files_folders.gif)


# NEW Features

* Generate a "focused function" graph to show the call hierarchy of the function currently focused in the editor
* To **create a graph** of the **focused function**, open the Command Palette (Ctrl+Shift+P) and choose the command _**AtomicViz: Create graph of focused function**_. Then put the cursor on any function name in the editor to show the function's call hierarchy.

![Focused function](media/gif_focused_function.gif)


# Features

* Create interactive graphs of:
    * Function calls
    * Variable references
    * Class inheritance
    * Interface implementation

* An integrated outline view mirrors the graph

* Interact with the code:
    * Jump to code from the graph or outline
    * The graph and outline follow code editing

* Works for many programming languages

* Customize the graph:
    * Layout graphs by file/folder, by files, with no grouping, or using custom groups
    * Hide unwanted graph items that are not relevant to your focus
    * Collapse graph items to show class dependencies at any level of detail
    * Easily exclude specific files from the graph

* Save customized graphs as local AtomicViz files, and then open the AtomicViz file to load the graph
* Show graphs in either the sidebar or code editor area
* Show multiple graphs simultaneously
* Search the graph
* Use the VS Code theme, light or dark
* Configure graph colors
* Export graphs as SVG


# Requirements

* Install the language pack for your language


# Paid features

* **AtomicViz** is free with limitations on the number and size of files included in the graph, and on the call-depth when graphing a function call hierarchy. Files in excess of the limits will be shown but will be permanently collapsed.

* You can purchase an **annual license** to remove these limitations for a single machine. Create a simple graph with a few files. In the graph window show the "Atomic" toolbar and then click the smiley face to purchase a license. When developing remotely, the license will be valid only for the remote machine.

* There is currently a hard cap of the number of files allowed, for performance reasons. Contact me if you need to increase this limit.


# How to use it

You can create several types of graphs:

1. **Files graph**: A graph based on a set of selected files which shows function calls, class inheritance, or interface implementation

2. **Function graph**: A graph which shows the call hierarchy of single function to a selected call depth

3. **Focused function graph**: A graph which shows the call hierarchy of sthe currently focused function

Files identified in any **.gitignore** file in the project will be ignored when creating a graph.

* To **create a graph** for **selected files**:
  > In the file explorer select the folders or files to include in the graph, right-click and choose _**AtomicViz: Create graph for selected files**_ from the context menu. Choose the command _**AtomicViz: Create graph for selected files, with variables**_ to include variable references.

* To **create a graph** for a **single function** to see its call hierarchy:
  > In the code, position the cursor on a function name, right-click and choose _**AtomicViz: Create graph for function**_ from the context menu. You can change the call depth later using the buttons in the toolbar.

* To **create a graph** of the **focused function**:
  > Open the Command Palette (Ctrl+Shift+P) and choose the command _**AtomicViz: Create graph of focused function**_. An empty graph will be created. Then put the cursor on any function name in an editor window to show the function's call hierarchy.

* To **open an existing** graph file:
  > Click on the AtomicViz file (*.atm) in the file explorer. If the graph file is already open, then right-click on the file in the file explorer and choose _**AtomicViz: Show graph**_ from the context menu.

* To **add a file** to an existing "files" graph:
  > Open the file to add in the editor. Then right-click on the AtomicViz file in the file explorer and choose _**AtomicViz: Add active editor file to graph**_.

* To **convert** a "function" graph to a "files" graph:
  > Right-click on the AtomicViz file in the file explorer and choose _**AtomicViz: Convert 'function' graph to 'files' graph**_ from the context menu.


# Graph interaction

* **Pan and zoom**
    * Pan by clicking and dragging the graph
    * Zoom in and out using the mouse wheel or a 2-finger motion on a trackpad. The focal point for zooming is the pointer location, not the center of the screen 
    * Reset zoom using the toolbar button: _**View: Zoom out**_

* **Interact with the code**
    * Jump to code by double-clicking on a graph item
    * Make the graph follow code editing by checking the checkbox  _**View: Follow edits**_

* **Graph item actions**
    * Collapse and expand a graph item using the arrow icons at its top-right 
    * Remove a file or group by clicking the trash icon at its top-left. Note that files and folder groups cannot be removed in a "function" graph. Convert the "function' graph to a "files" graph to customize it.
    * Hide unwanted graph items by selecting them and clicking the buttton _**Visible: Hide**_ in the **Visible** toolbar
    * Click a graph item to toggle its selection state. To select multiple graph items, check the checkbox _**"Selection: Multi"**_ 

* **Graph toolbar**
    * For a **Files graph**:
      * Choose whether to show function calls, class inheritance, or interface implementation
      * When showing "function calls", click the "variables button" to show variables and their references
        * Choose what type of variables to show
            * Class members
            * Global variables
            * Local variables
        * Arrows are shown for each reference to the variable within functions, excluding references in global scope
        * Use **Focus mode** to more clearly see the usage of the variable

    * For a **Function graph**, you can only choose the depth of the call hierarchy
    * Rebuild the graph after making code changes, by clicking the button _**Graph: Rebuild graph**_
        * If file or folder names have changed, you will be prompted about the missing files. If the graph is being loaded from an **AtomicViz** file, then you edit the graph file manually to fix the file paths

        * If the name of a class, function, or interface has changed, then the collapsed-state and hidden-state for that graph items will be lost. If the graph is being loaded from an **AtomicViz** file, then you edit the graph file manually to fix the names of classes, functions, or interfaces that should be hidden or collapsed.

    * Save the graph as an **AtomicViz** file or **export as SVG**. Note that **AtomicViz** graph files are usable only in the context of the workspace in which they are created.
    * Choose whether the graph **automatically follows** the cursor position in the editor. A newly focused graph item will be  highlighted in pink for a moment

* **Grouping toolbar**
    * Choose to group graph items by **file/folder**, by **file**, by **class**, or **without any grouping**. When not grouping by folders, you can create **custom groups**
    * When choosing to layout the graph by **files** or **without any grouping**, then you can create your own **custom groups**
    * To create a group, type a name for it, select the top-level graph items to include, and then click the button _**Grouping: Create group**_
    * Groups can include other groups. To select a group click the checkmark icon at its top-left

* **Visible toolbar**
    * Hide selected items. You can hide graph items that are not relevant to your focus or to the task at hand
    * **Hidden items** can be made visible again by clicking on the eye icon on a graph item, or using the toolbar button  _**Layout: Show hidden**_ to show top-level graph items that are hidden
    * Expand and collapse graph items to change the level of detail
        * **Collapse graph items**: classes or anonymous functions (or callbacks)
        * **Expand graph items**: classes or anonymous functions (or callbacks)
    * Use **Focus mode** to temporarily hide eveything else in the graph that is not connected to the selected item(s).
        * First select the item(s) to focus, then click the button  _**Visible: Focus selecte items**_
        * Click the focus button again to restore the graph to its unfocused state
    * You can expand the source and destination of an arrow by **double-clicking the arrow**. If the actual source or destination graph item is not visible (because its parent is collapsed), then the parent will be expanded to reveal the graph item

* **Layout toolbar**
    * Sort graph items by their file positions, or alternatively by the kind of item and alphabetically
    * Adjust the horizontal spacing between graph items to improve the graph layout

* **View toolbar**
    * Check the checkbox  _**View: Follow edits**_ to make the graph follow edits to the code
    * Click the button _**View: Zoom out**_ to reset the zoom level and make the entire graph visible, or simply right-click

* **Selection toolbar**
    * Click a graph item to toggle its selection state
    * Selected items are shown with a yellow border
    * To select multiple graph items, check the checkbox _**"Selection: Multi"**_. By default, you can only select a single graph item. 
    * By default, selecting a graph item also **selects its children**. You can toggle the selected state of an item without **affecting its children** by holding down the _**Ctrl key**_ while clicking on the item
    * Clear all selections using the button _**Selection: Clear selection**_ or using the **Space Bar**
    * You can select a set of **sibling graph items** using the Shift key. Select the first item, hold down Shift and select a sibling item
    * You can select a set of graph items using the button: _**Selection: Select items**_. Choose to select classes, interfaces, search result items, or graph items that are not connected to anything
    * When using multi-slection, a single edge can be both incoming and outgoing. Therefore, select a single graph item to clearly see its incoming and outgoing edges.
    * Clicking on an arrow will select it and hide all other arrows. To clear the arrow selection, click anywhere not on a graph item or edge. 

* **Arrows toolbar**
    * When nothing is selected, all arrows are shown by default
    * When graph item(s) are selected, choose whether to show both **incoming and outgoing** arrows, or just incoming, or just outgoing

* **Search toolbar**
    * Search for graph items by name. The items found will be highlighted in pink. You can then select those items using the selection menu _**Selection: Select items**_
    * Search supports options for case sensitivity and regular expressions.

* **Bugs toolbar**
    * Please report any bugs or ideas for improvement. You can also email me at atomicviz11@gmail.com

* **AtomicViz toolbar**
    * Click on the smiley face to **purchase an annual license** for the single machine you are using. Upon purchase, you will be **emailed the license key**. When developing remotely, the license will be valid only for the remote machine.
    * Paste the **license key** into the text box and click the _**smiley face**_ button to activate the license.
    * Double-click the smiley face to remove an already activated license.


# Graph windows and colors

* Graphs can be shown in either the **sidebar** or code **editor area**. This is determined by the extension setting _**Show in sidebar**_
* Only a single sidebar graph can be open, but multiple graphs can be open simultaneously in the editor area
* Graphs use the **VS Code theme**, light or dark
* Graph colors for each type of graph item can be changed in the extension settings


# Outline view

* The visibility and expansion state of items in the outline will mirror the graph
* Expand and collapse items in the outline to affect the graph
* Hide items via the outline, and delete files from the graph
* Select an item in the outline to navigate to the item in the editor and/or in the graph
* Choose whether the outline is interactive, that is, whether an item in the outline will be selected and focused when a graph item is double-clicked or when a symbol is selected in the editor
* Control whether the editor and/or graph will follow a selection in the outline when manually selecting an item in the outline


# Data & Privacy

* Absolutely none of your code or environment data is collected or shared
* The extension runs completely locally except to manage licensing and to send telemetry for extension usage.


# Quick tutorials

#### Layout graphs by file/folder, by file, or without any grouping
![Layout by file/folder](media/gif_layout_files_folders.gif)

#### Expand and collapse items using arrow icons
![Expand and collapse manually](media/gif_layout_expand_collapse_manual.gif)

#### Expand and collapse item groups using toolbar
![Expand and collapse using toolbar](media/gif_layout_expand_collapse_menu.gif)

#### Hide unwanted items
![Hide items](media/gif_layout_hide_show.gif)

#### Select item groups
![Select menu](media/gif_select_menu.gif)

#### Rebuild a graph after code changes
![Graph rebuild](media/gif_graph_rebuild.gif)

#### Create custom groups
![Cluster menu](media/gif_cluster_menu.gif)


# How does it work

* AtomicViz uses the **language server** capabilities of VS Code that are provided for each language. The language server can provide a call hierarchy for any function, so it is possible to build a map of a codebase by interrogating the language server for all the functions in a given scope.

* Graphs are created using **Graphviz**, so the layout is managed by the Graphviz algorithms.

* Transitions during the expansion or collapse of a graph item **try to maintain continuity of position** of the item affected. Generally, the top-right corner of an item should remain in position across a transition.


# Motivation

* Every codebase is a maze of files. The only semantic information at a quick glance are the file and folder names.

* A graphical representation of a code is more informative, and more useful as a tool for navigation if it shows only the files and functions relevant to the task at hand. Then you can easily jump to the sections of code that you are working on, without the need to use bookmarks, search-all-files for a symbol name, or find-all-references for a symbol.


# Keywords

* code architecture diagram
* code diagram
* code graph
* code map
* code navigation
* code visualizer
* code visualization
* dependency graph
* dependency diagram
* function call graph
* function call diagram
* function call hierarchy
* call hierarchy


# Troubleshooting

* **The extension isn't working for my language**

  Make sure your language is supported in VS Code. It should natively provide the ability to see the call hierarchy of a function, a capability usually installed as part of a language pack. You can check for this capability by right-clicking on the name of a function in your code, and see if there is a "**Show Call Hierarchy**" option in the context menu. You can further test that feature be showing both the incoming and outgoing calls from a function. 

<p align="center">
  <img src="media/requirements_call_hierarchy.png" width="300" alt="Call Hierarchy" />
</p>

* **The graph is not created or there are no arrows between graph items**
  Sometimes the language server is not ready. AtomicViz will try to open one of the files in the graph to kickstart the language server, but sometimes it starts too slow. As a rememdy, first open any file in the language to be graphed **before** creating a graph or loading a graph file.

* **The graph is created and the files are included, but there are no arrows for some files**
  Ensure that your project configuration includes all of the files to be graphed. For example, in a Typescript project, ensure that the "rootDir" directory in tsconfig.json includes all of the files to be graphed.

* **Document symbol information not available for file 'xyz'**
  The language server is unable to provide information about the symbols in the file. Probably the language pack you installed doesn't provide the necessary support.

* **Graph construction never finishes**
  There are some VS Code API issues that can cause the extension to crash. Try to uninstall and reinstall the extension, or simply restart all extensions. Please report the issue.

* **Language specfic notes:**
  Typescript: Class constructors should not be delcared public, although it is legal
  PHP: The "PHP IntelliSense" extension and other PHP extensions do not provide the feature to "Show Call Hierarchy"
  C#: The "C# for Visual Studio Code" extension does not provide the feature to "Show Call Hierarchy"
  D3: Due to the way D3 handles function chaining, some files may be skipped in a graph of files, and a function call graph may fail completely, requireing a restart of VS Code extensions
  

# Feedback

I would love to hear your feedback and ideas for improvements.
My email is atomicviz11@gmail.com

Thanks!


# Support

**AtomicViz** wasn't easy to build. If you find it useful, please consider supporting it.

<a title="Paypal" href="https://www.paypal.com/donate/?hosted_button_id=4FLK7Y5EWR7DE"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"/></a>


# License
[Copyright](LICENSE.md) &copy; Brian DiLoreto 2024
