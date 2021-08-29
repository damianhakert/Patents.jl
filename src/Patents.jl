module Patents

using Statistics

include("applications.jl")
include("classification.jl")
include("families.jl")
include("diversity.jl")

export Application, ApplicationID, Title, Abstract, Classification, NPLCitation

export
lensid, id, jurisdiction, status, docnr, kind, date,
title, abstract, lang, text, 
applicants, inventors,
siblings, 
classification, code, subgroup, maingroup, subclass, class, section,
cites, cites_npl, cites_count, cites_count_npl, citedby, citedby_count

export Family, applications, jurisdictions, dates, earliest_filing

export citationgraph, coclassification

end
