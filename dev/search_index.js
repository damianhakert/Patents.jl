var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Patents","category":"page"},{"location":"#Patents","page":"Home","title":"Patents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Patents]","category":"page"},{"location":"#Patents.ClassificationCPC","page":"Home","title":"Patents.ClassificationCPC","text":"Struct to represent the CPC patent classification system.\n\n\n\n\n\n","category":"type"},{"location":"#Patents.SymbolCPC","page":"Home","title":"Patents.SymbolCPC","text":"Struct representing a CPC classification symbol which holds an internal id, the level  and corresponding label, the code, and the title of the symbol.\n\n\n\n\n\n","category":"type"},{"location":"#Patents.children-Tuple{Patents.AbstractClassification, Vector{SymbolCPC}}","page":"Home","title":"Patents.children","text":"children(classification, symbols)\n\nGet the children for each of the symbols in symbols. symbols can be passed as [a vector of] SymbolCPC or Strings. \n\n\n\n\n\n","category":"method"},{"location":"#Patents.children_recursive-Tuple{Patents.AbstractClassification, Vector{SymbolCPC}}","page":"Home","title":"Patents.children_recursive","text":"children_recursive(classification, symbols)\n\nTraverse the classification tree given by classification starting at symbols until a sink node is  reached and return the visited symbols as a SubClassificationCPC.\n\n\n\n\n\n","category":"method"},{"location":"#Patents.parents-Tuple{Patents.AbstractClassification, Vector{SymbolCPC}}","page":"Home","title":"Patents.parents","text":"parents(classification, symbols)\n\nGet the parents for each of the symbols in symbols.  symbols can be passed as [a vector of] SymbolCPC or Strings. \n\n\n\n\n\n","category":"method"},{"location":"#Patents.parents_recursive-Tuple{Patents.AbstractClassification, Vector{SymbolCPC}}","page":"Home","title":"Patents.parents_recursive","text":"parents_recursive(classification, symbols)\n\nTraverse the classification tree given by classification starting at symbols until a source node is  reached and return the visited symbols as a SubClassificationCPC.\n\n\n\n\n\n","category":"method"},{"location":"#Patents.prune-Tuple{Patents.AbstractClassification}","page":"Home","title":"Patents.prune","text":"prune(classification, toplevel=1, bottomlevel=5)\n\nPrune the classification tree given by classification to only include nodes in and between toplevel and bottomlevel.\n\n\n\n\n\n","category":"method"},{"location":"#Patents.symbols-Tuple{Patents.AbstractClassification}","page":"Home","title":"Patents.symbols","text":"symbols(classification)\n\nObtain an array with SymbolsCPC contained in patent classification object classification.  A struct subtyping LevelCPC (e.g. SubgroupCPC) can be passed as a second argument to only obtain symbols of that kind.\n\n\n\n\n\n","category":"method"}]
}
