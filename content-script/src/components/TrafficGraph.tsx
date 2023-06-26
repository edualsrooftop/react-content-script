import Chart from 'react-apexcharts'

function getMonthName(month) {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return monthNames[month - 1];
  }

export function TrafficGraph({keywords}): JSX.Element{

    // var keywords={
    //     version: "0.1.20221214",
    //     status_code: 20000,
    //     status_message: "Ok.",
    //     time: "0 sec.",
    //     cost: 0,
    //     tasks_count: 1,
    //     tasks_error: 1,
    //     tasks: [
    //         {
    //             id: "06260214-6303-0093-0000-259cd8a291eb",
    //             status_code: 40200,
    //             status_message: "Payment Required.",
    //             time: "0 sec.",
    //             cost: 0,
    //             result_count: 0,
    //             path: [
    //                 "v3",
    //                 "keywords_data",
    //                 "google",
    //                 "search_volume",
    //                 "live"
    //             ],
    //             data: {
    //                 api: "keywords_data",
    //                 function: "search_volume",
    //                 se: "google",
    //                 keywords: [
    //                     "hialuroni caps",
    //                     "hialuroni onde comprar"
    //                 ],
    //                 location_code: 2076,
    //                 search_partners: false
    //             },
    //             result: null
    //         }
    //     ]
    // }
    
    
    // searchAdTraffic(['hialuroni caps', 'hialuroni onde comprar'])
	// 	.then((data) => {
    //         keywords = data
	// 		console.log('Search Ad Traffic',data);
	// 		// keywords = data
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});

    const result = keywords.result && keywords.result.length > 0 ? keywords.result[0] : null;
    // TODO: #1 Adicionar capacidade de exibir duas ou mais palavras chaves
    if (result && result.monthly_searches) {
        const sortedData = result.monthly_searches.sort((a, b) => {
        if (a.month !== b.month) {
            return a.month - b.month; // Ordenar por mês crescente
        } else {
            return a.year - b.year; // Ordenar por ano crescente, se os meses forem iguais
        }
        });
        
        const data_values = sortedData.map((item) => item.search_volume);
        const categories = sortedData.map((item) => getMonthName(item.month));

        const data = [
            {
                name: 'Searchs',
                data: data_values,
            },
        ]
        // console.log('categories', categories)
        // console.log('data', data)
    return (
        <Chart
            options={{
                chart: {
                    type: 'line',
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                colors: ["purpple"],
                xaxis: {
                    categories: categories,
                },
            }}
            series={data}
            height={300}
        />
    )

    }
}