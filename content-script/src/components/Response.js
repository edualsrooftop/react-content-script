export function Response({ response }) {
	return (
		<div>
			<p>Ads encontrados: {response.quantidadeAds} </p>
			<p>Com extensão: {response.quantidadeAdsComExtensions} </p>
			<p>Com oferta: {response.quantidadeAdsComOferta} </p>
			<p>Com produtos: {response.quantidadeAdsComProducts} </p>
			<p>Com Sitelinks: {response.quantidadeAdsComSitelinks} </p>
			<p>Video review encontrados: {response.quantidadeInlineVideos} </p>
		</div>
	)
	// if (response && response.ads) {
	//   return (
	// 	<table>
	// 	  <thead>
	// 		<tr>
	// 		  <th>Position</th>
	// 		  <th>Título</th>
	// 		  <th>Descrição</th>
	// 		</tr>
	// 	  </thead>
	// 	  <tbody>
	// 		{response.ads.map((ad, index) => (
	// 			<tr key={index}>
	// 			<td>{ad.position}</td>
	// 			<td> 
	// 				<a href={ad.link}>  
	// 					{ad.title}
	// 				</a>
	// 			</td>
	// 			<td>{ad.description}</td>
	// 		  </tr>
	// 		))}
	// 	  </tbody>
	// 	</table>
	//   );
	// } else {
	//   return <p>Nenhum resultado encontrado.</p>;
	// }
  }