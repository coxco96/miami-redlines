var config = {
    style: 'mapbox://styles/coxco96/cl4yph7ro000h14qrm4pialrg',
    accessToken: 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    projection: "mercator",
    title: "Historically redlined neighborhoods are hotter in Miami",
    subtitle: "By Court Cox",
    byline: '',
    footer: 'Source: Mapping Inequality: Redlining in New Deal America; Pixel-level heat data from NASA LP DAAC (MOD11a1.061 on Google Earth Engine)',
    chapters: [

        {
            id: 'chapter-1',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'Scroll to see the heat level of each HOLC grade, where red is hotter and green is cooler.',
            location: {
                center: [-80.152, 25.795],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: "miamidade-outline",
                opacity: 1
                // duration: 5000

            }],
            onChapterExit: [{
                layer: "miamidade-outline",
                opacity: 1
            }]
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'HOLC grade A',
            location: {
                center: [-80.152, 25.795],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'grade_A_outline',
                    opacity: 1,
                },
                {
                    layer: 'gradeA-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                    layer: 'grade_A_outline',
                    opacity: 0
                },
                {
                    layer: 'gradeA-fill',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'HOLC grade B',
            location: {
                center: [-80.152, 25.795],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'grade_B_outline',
                    opacity: 1,
                },
                {
                    layer: 'gradeB-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                    layer: 'grade_B_outline',
                    opacity: 0
                },
                {
                    layer: 'gradeB-fill',
                    opacity: 0
                }
            ]
        },


        {
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: '',
            //image: 'images/asbury-1.png',
            description: 'HOLC grade C',
            location: {
                center: [-80.152, 25.795],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'grade-c-outline',
                    opacity: 1,
                },
                {
                    layer: 'gradeC-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                    layer: 'grade-c-outline',
                    opacity: 0
                },
                {
                    layer: 'gradeC-fill',
                    opacity: 0
                }
            ]
        },


        {
            id: 'chapter-5',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'HOLC grade D',
            location: {
                center: [-80.152, 25.795],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'grade-d-outline',
                    opacity: 1,
                },
                {
                    layer: 'grade-d-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                    layer: 'grade-d-outline',
                    opacity: 0
                },
                {
                    layer: 'grade-d-fill',
                    opacity: 0
                }
            ]
         
        }



    ]
};