"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[8829],{5245:(A,e,i)=>{i.d(e,{Ay:()=>r,RM:()=>a});var t=i(2540),n=i(3023);const a=[];function s(A){const e={admonition:"admonition",p:"p",...(0,n.R)(),...A.components};return(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function r(A={}){const{wrapper:e}={...(0,n.R)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(s,{...A})}):s(A)}},5205:(A,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"specification/DigitalFacilityRecord","title":"Digital Facility Profile","description":"Artifacts","source":"@site/docs/specification/DigitalFacilityRecord.md","sourceDirName":"specification","slug":"/specification/DigitalFacilityRecord","permalink":"/spec-untp/docs/specification/DigitalFacilityRecord","draft":false,"unlisted":false,"editUrl":"https://github.com/uncefact/spec-untp/edit/main/website/docs/specification/DigitalFacilityRecord.md","tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"sidebar_position":18,"title":"Digital Facility Profile"},"sidebar":"tutorialSidebar","previous":{"title":"Digital Traceability Events","permalink":"/spec-untp/docs/specification/DigitalTraceabilityEvents"},"next":{"title":"Identity Resolver","permalink":"/spec-untp/docs/specification/IdentityResolver"}}');var n=i(2540),a=i(3023),s=i(5245);const r={sidebar_position:18,title:"Digital Facility Profile"},l=void 0,o={},c=[...s.RM,{value:"Artifacts",id:"artifacts",level:2},{value:"Stable Releases For Implementation",id:"stable-releases-for-implementation",level:3},{value:"Release for Pilot Testing",id:"release-for-pilot-testing",level:3},{value:"Latest Development Version",id:"latest-development-version",level:3},{value:"Version History",id:"version-history",level:3},{value:"Default Render Template",id:"default-render-template",level:3},{value:"Sample Credential",id:"sample-credential",level:3},{value:"Overview",id:"overview",level:2},{value:"Conceptual Model",id:"conceptual-model",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Logical Model",id:"logical-model",level:2},{value:"Core Vocabulary Documentation",id:"core-vocabulary-documentation",level:3},{value:"DFR Documentation",id:"dfr-documentation",level:3},{value:"Implementation Guidance",id:"implementation-guidance",level:2},{value:"Verifiable Credential",id:"verifiable-credential",level:3},{value:"Facility",id:"facility",level:3},{value:"Location",id:"location",level:3},{value:"Confomrity Claims",id:"confomrity-claims",level:3},{value:"Samples",id:"samples",level:2}];function d(A){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsx)(e.h2,{id:"artifacts",children:"Artifacts"}),"\n",(0,n.jsxs)(e.p,{children:["Are maintained at ",(0,n.jsx)(e.a,{href:"https://test.uncefact.org/vocabulary/untp/dfr/0/about",children:"https://test.uncefact.org/vocabulary/untp/dfr/0/about"})]}),"\n",(0,n.jsx)(e.h3,{id:"stable-releases-for-implementation",children:"Stable Releases For Implementation"}),"\n",(0,n.jsx)(e.p,{children:"Version 1.0 stable release for production implementation is due Jan 2025"}),"\n",(0,n.jsx)(e.h3,{id:"release-for-pilot-testing",children:"Release for Pilot Testing"}),"\n",(0,n.jsx)(e.p,{children:"Version 0.5.0 release artifacts can be used for pilot testing."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://test.uncefact.org/vocabulary/untp/dfr/0.5.0/",children:"JSON-LD @context"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://test.uncefact.org/vocabulary/untp/dfr/untp-dfr-schema-0.5.0.json",children:"JSON Schema"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://test.uncefact.org/vocabulary/untp/dfr/untp-dfr-instance-0.5.0.json",children:"Sample Instance"})}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"latest-development-version",children:"Latest Development Version"}),"\n",(0,n.jsx)(e.p,{children:"Latest development versions are used to reflect lessons learned from pilots but should not be used for either pilot testing or production purposes."}),"\n",(0,n.jsx)(e.h3,{id:"version-history",children:"Version History"}),"\n",(0,n.jsxs)(e.p,{children:["History of releases is available from the ",(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{href:"https://test.uncefact.org/vocabulary/untp/dfr/0/versions",children:"Version history"})})," page."]}),"\n",(0,n.jsx)(e.h3,{id:"default-render-template",children:"Default Render Template"}),"\n",(0,n.jsxs)(e.p,{children:["A UNTP digital facility record may be rendered in any format desired by the issuer. However a default ",(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(8244).A+"",children:"Template Design"})})," is provided here and includes mapping of visual rendering elements to the ",(0,n.jsx)(e.a,{href:"#logical-model",children:"Logical Data Model"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"sample-credential",children:"Sample Credential"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"URL"}),(0,n.jsx)(e.th,{children:"QR"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://untp.showthething.com/verify/?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Funtp-verifiable-credentials.s3.amazonaws.com%2F936fe321-94ad-4b0b-8690-f6b25da1fc7f.json%22%7D%7D",children:"Sample Battery Manufacturing Facility Record"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.img,{alt:"Sample Battery Manufacturing Facility Record",src:i(390).A+"",width:"1098",height:"1098"})}),(0,n.jsxs)(e.td,{children:["A sample digital facility record as a JWT envelope signed Verifiable Credential. The URL (or QR scan) resolved to a hosted verifier that displays a human readable version. Raw JSON data can be viewed via the ",(0,n.jsx)(e.code,{children:"JSON"})," tab and the full credential can be dlownloaded via the download button."]})]})})]}),"\n",(0,n.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(e.p,{children:["The digital facility record (DFR) is issued by the owner or operator of a production or manufacturing facility and is the carrier of ",(0,n.jsx)(e.strong,{children:"facility data and sustainability information"})," for an identified facility in the value chain. It is very similar to the digital product passport except that it describes a facility rather than a product. The DFR is discoverable in the same way as a DPP - namely by resolving the facility ID to an Identity Resolver service that will return links to facility records. The sustainability performance metrics are also at the facility annual total level rather than at the product level. In many value chains, facility level information may be sufficient to meet the due diligence requirements of buyers and so the facility record can be used independently of the product passport. However product passports should reference the facility at which the product was produced. Where both facility and product information are available, verifiers can perform an approximate mass-balance assessment for quantity based criteria such as GHG emissions. For example, the total individual emissions recorded in all products shipped from a facility should approximately equal the reported annual emissions of the facility."]}),"\n",(0,n.jsx)(e.h2,{id:"conceptual-model",children:"Conceptual Model"}),"\n",(0,n.jsx)(e.p,{children:"TBA"}),"\n",(0,n.jsx)(e.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(e.p,{children:["The digital facility record is designed to meet the following detailed requirements as well as the more general ",(0,n.jsx)(e.a,{href:"https://uncefact.github.io/spec-untp/docs/about/Requirements",children:"UNTP Requirements"})]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"ID"}),(0,n.jsx)(e.th,{children:"Name"}),(0,n.jsx)(e.th,{children:"Requirement Statement"}),(0,n.jsx)(e.th,{children:"Solution Mapping"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DFR-01"}),(0,n.jsx)(e.td,{children:"Resolvable ID"}),(0,n.jsx)(e.td,{children:"Each facility must have at least one resolvable identifier that can be used in digital product passports and other data exchanges so that verifiers can always access the latest facility data."}),(0,n.jsx)(e.td,{children:"Facility.id"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DFR-02"}),(0,n.jsx)(e.td,{children:"Process categories"}),(0,n.jsx)(e.td,{children:"The DFR should support any number of industry process classifications using codes from a defined classification scheme (eg UN-CPC)"}),(0,n.jsx)(e.td,{children:"The classifications property"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DFR-03"}),(0,n.jsx)(e.td,{children:"Geo-Location"}),(0,n.jsx)(e.td,{children:"The DFR should should provide a means to specify both a geo-location point (aka pin) and a boundary geometry (aka polygon) so that verifiers can geo-locate supplier facilities"}),(0,n.jsx)(e.td,{children:"The Location class meets this need."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DFR-04"}),(0,n.jsx)(e.td,{children:"Owner / operator"}),(0,n.jsx)(e.td,{children:"The DFR should specify the owner and/or operator entity of the facility using one or more globally unique and resolvable entity identifiers."}),(0,n.jsx)(e.td,{children:"Facility.OperatedByParty is a UNTP Entity structure that meets this need."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DFR-05"}),(0,n.jsx)(e.td,{children:"Declarations"}),(0,n.jsx)(e.td,{children:"The DFR MUST provide a means to include any number of conformity declarations so that it can provide simple single point to aggregate all claims about the facility in one place"}),(0,n.jsx)(e.td,{children:'The "conformityDeclarations" array is designed to meet this need'})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DFR-06"}),(0,n.jsx)(e.td,{children:"Conformity Topic"}),(0,n.jsx)(e.td,{children:"The DFR MUST provide a simple mechanism to express the sustainability/circularity/conformity topic for each claim so that similar claims can be grouped and the high level scope easily understood."}),(0,n.jsx)(e.td,{children:"The ConformityTopic code list is designed to meet this need"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DPP-07"}),(0,n.jsx)(e.td,{children:"Metrics"}),(0,n.jsx)(e.td,{children:"The DFR MUST provide a simple mechanism to quantify a conformity claim (eg carbon intensity, water consumption, etc) and to express any accuracy range."}),(0,n.jsx)(e.td,{children:'The "Metric" class is designed to meet this need'})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DPP-08"}),(0,n.jsx)(e.td,{children:"Criteria"}),(0,n.jsx)(e.td,{children:"The DPP MUST provide a means to reference a standard or regulation as well as the specific criteria within that standard or regulation - so that claims can be understood in terms of the criteria against which they are made."}),(0,n.jsx)(e.td,{children:"Declaration.referenceRegulation, Declaration.referenceStandard, Declaration.referenceCriteria"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"DPP-09"}),(0,n.jsx)(e.td,{children:"Evidence"}),(0,n.jsx)(e.td,{children:"The DPP MUST provide a means to reference independent conformity assessments that support and verify the claims being made. The related evidence SHOULD be digitally verifiable but MAY be a simple document or web page. The confidence level attached to the evidence should be clear."}),(0,n.jsx)(e.td,{children:"The Declaration.conformityEvidence property references a relevant digital conformity credential"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"logical-model",children:"Logical Model"}),"\n",(0,n.jsx)(e.p,{children:"The Digital Facility Record is an assembly of re-usable components from the UNTP core vocabulary."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Digital Facility Record data model",src:i(5991).A+"",width:"1366",height:"1022"})}),"\n",(0,n.jsx)(e.h3,{id:"core-vocabulary-documentation",children:"Core Vocabulary Documentation"}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.a,{href:"https://jargon.sh/user/unece/untp-core/v/0.5.0/artefacts/readme/render",children:"UNTP core types vocabulary"})," defines the uniquely identified Linked Data entities such as Product, Location, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, Endorsement. These entities provide the building blocks for construction of the Digital Facility Record."]}),"\n",(0,n.jsx)(e.h3,{id:"dfr-documentation",children:"DFR Documentation"}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.a,{href:"https://jargon.sh/user/unece/DigitalFacilityRecord/v/0.5.0",children:"DFR documentation"})," provides a technology-neutral definition of classes, properties and code lists in the DFR model."]}),"\n",(0,n.jsx)(e.h2,{id:"implementation-guidance",children:"Implementation Guidance"}),"\n",(0,n.jsx)(e.p,{children:"This section provides sample JSON-LD snippets for each DFR component with guidance on their purpose and usage."}),"\n",(0,n.jsx)(e.h3,{id:"verifiable-credential",children:"Verifiable Credential"}),"\n",(0,n.jsxs)(e.p,{children:["Digital Facility Records are issued as Vierifiable credentials. Please refer to ",(0,n.jsx)(e.a,{href:"/spec-untp/docs/specification/DigitalProductPassport#verifiable-credential",children:"DPP VC Guidance"})," for information about the use of the verifiaible credentials data model for UNTP.  THe issuing party for the VC should be the facility owner or operator."]}),"\n",(0,n.jsx)(e.h3,{id:"facility",children:"Facility"}),"\n",(0,n.jsxs)(e.p,{children:["The facility object is the ",(0,n.jsx)(e.code,{children:"credentialSubject"}),". It comprises"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"An identifier for the facility.  This could be a self-issued DID, or an ID managed by an industry association such as a member / facility register, or a global location scheme such as a GS1 GLN.  Whatever the facility identifier scheme, facility IDs should be resolvable and verifiable."}),"\n",(0,n.jsx)(e.li,{children:"An industry process category, preferably using a global standard classificaiton scheme such as UN ISIC."}),"\n",(0,n.jsxs)(e.li,{children:["The ",(0,n.jsx)(e.code,{children:"operatedByParty"})," for the facility, typically identified using a national business register or a glbal business identifier scheme."]}),"\n",(0,n.jsx)(e.li,{children:"The semi-strucutred address for the facility."}),"\n",(0,n.jsx)(e.li,{children:"The geolocation information for the facility (using PlusCodes adn GeoJSON - see below)"}),"\n",(0,n.jsxs)(e.li,{children:["The confirmity claims about the facility made by the facility owner or operator - following the same ",(0,n.jsx)(e.code,{children:"Declaratoion"})," structure as used by the UNTP Digital Product Passport."]}),"\n"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:'  "credentialSubject": {\n    "type": [\n      "Facility"\n    ],\n    "id": "https://samplefacilityregister.org/1234567",\n    "registeredId": "1234567",\n    "description": "LiFePO4 Battery plant number 7",\n    "name": "Example facility 7",\n    "idScheme": {\n      "type": [\n        "IdentifierScheme"\n      ],\n      "id": "https://samplefacilityregister.org",\n      "name": "A facility register"\n    },\n    "countryOfOperation": "AU",\n    "processCategory": [\n      {\n        "type": [\n          "Classification"\n        ],\n        "id": "https://unstats.un.org/unsd/classifications/Econ/isic/2611",\n        "code": "2611",\n        "name": "Manufacture of solar cells, solar panels and photovol",\n        "schemeID": "https://unstats.un.org/unsd/classifications/Econ/isic",\n        "schemeName": "UN Standard Industry Classification"\n      },\n      {...}\n    ],\n    "operatedByParty": {\n      "type": [\n        "Identifier"\n      ],\n      "id": "https://abr.business.gov.au/ABN/View?abn=90664869327",\n      "name": "Sample Company Pty Ltd.",\n      "registeredId": "90664869327",\n      "idScheme": {\n        "type": [\n          "IdentifierScheme"\n        ],\n        "id": "https://abr.business.gov.au",\n        "name": "Australian Business Number"\n      }\n    },\n    "otherIdentifier": [..],\n    "address": {\n      "streetAddress": "level 11, 15 London Circuit",\n      "postalCode": "2601",\n      "addressLocality": "Acton",\n      "addressRegion": "ACT",\n      "addressCountry": "AU"\n    },\n    "locationInformation": {..},\n    "conformityClaims": [..]\n  }\n}\n'})}),"\n",(0,n.jsx)(e.h3,{id:"location",children:"Location"}),"\n",(0,n.jsx)(e.p,{children:"Facility location is a value object (ie it does not have a unique identifier). It's purpose it to locate the facility in a geographic area with whatever degree of resolution required. A location object must include at leaqst one of the following geolocation properties:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["An open location code (also know as ",(0,n.jsx)(e.a,{href:"https://maps.google.com/pluscodes/",children:"Plus Codes"}),"). Plus codes are essentially a grid reference and can define an small area that is virtually a pin location (eg ",(0,n.jsx)(e.a,{href:"https://plus.codes/8CGRC78W+MM",children:"https://plus.codes/8CGRC78W+MM"}),") or a much larger area (eg Roughly Madrid city - ",(0,n.jsx)(e.a,{href:"https://plus.codes/8CGRC700+",children:"https://plus.codes/8CGRC700+"}),') by removing digits after the "+" and replacing grid digits with an even number of trailing zeros.']}),"\n",(0,n.jsxs)(e.li,{children:["A geoLocation as a ",(0,n.jsx)(e.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.1",children:"GeoJSON Point"})," as a decimal lattitude / longditude pair."]}),"\n",(0,n.jsxs)(e.li,{children:["A geoBoundary as a ",(0,n.jsx)(e.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.3",children:"GeoJSON Polygon"})," that defines any closed boundary (or collection of closed boundaries) as a sequence of lat/long pairs where the first and last pair represent the same point."]}),"\n"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:'\n    "locationInformation": {\n      "plusCode": "https://plus.codes/8CGRC78W+MM",\n      "geoLocation": {\n        "type": "Point",\n        "coordinates":[\n            40.416688,\n            -3.703313,\n          ]\n      },\n      "geoBoundary": {\n        "type": "Polygon",\n         "coordinates": [\n              [\n                 [100.0, 0.0],\n                 [101.0, 0.0],\n                 [101.0, 1.0],\n                 [100.0, 1.0],\n                 [100.0, 0.0]\n             ]\n          ]\n      }\n'})}),"\n",(0,n.jsx)(e.h3,{id:"confomrity-claims",children:"Confomrity Claims"}),"\n",(0,n.jsxs)(e.p,{children:["Conformity information is included in the Digital Facility Record as an array of UNTP Declaration structures. The same structure is re-used for confomrity Information in Digital Product Passports nad for third party assessments in UNTP Digital Conformity Credentials (DCC). Please refer to the ",(0,n.jsx)(e.a,{href:"/spec-untp/docs/specification/SustainabilityVocabularyCatalog",children:"Sustainability Vocabulary Page"})," for further information and examples."]}),"\n",(0,n.jsx)(e.h2,{id:"samples",children:"Samples"})]})}function h(A={}){const{wrapper:e}={...(0,a.R)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(d,{...A})}):d(A)}},8244:(A,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/files/DigitalFacilityRecordRender-7641592eb2c14df99895c8b8e191dfe6.png"},5991:(A,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/DigitalFacilityRecord-3aa09f4bb6f11a35d33b66b89b20a744.svg"},390:(A,e,i)=>{i.d(e,{A:()=>t});const t="data:image/png;base64,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"},3023:(A,e,i)=>{i.d(e,{R:()=>s,x:()=>r});var t=i(3696);const n={},a=t.createContext(n);function s(A){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function r(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(n):A.components||n:s(A.components),t.createElement(a.Provider,{value:e},A.children)}}}]);