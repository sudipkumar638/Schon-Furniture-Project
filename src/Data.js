//https://htmlbeans.com/html/schon/homepage2.html

const data=[
    {
        type:"featured",
        products:[{
           image:"https://htmlbeans.com/html/schon/images/products/img22.jpg",
           rating:3,
           productName:"Bombi Chair",
           price:399.00
        },

        {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580742487-resize.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:3,
            productName:"Eero Saarinen Tulip Chair",
            price:1648,
            description:"Finnish-American architect and designer Eero Saarinen famously hated the sight of many table and chair legs in a room, calling it an  In an attempt to streamline these necessary supports, Saarinen developed the Tulip collection, which trades four legs for one central pedestal, supporting a sculptural seat reminiscent of its namesake flower. The chair has been produced by Knoll (the manufacturer founded by Saarinen's friend Florence and her husband Hans Knoll) since 1957."         
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580745198-PD_2582_MAIN.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:3,
            productName:"Hans wegner Wishbone chair",
            price:865,
            description:"In the 1940s, Danish designer Hans Wegner saw a series of photographs of Chinese tradesmen—and became fascinated with the chairs on which they were sitting. He set about creating his own version of the Ming chair, incorporating a curved, bent-wood armrest and the namesake back, whose pronged wishbone shape allowed for a more graceful silhouette. He introduced the chair with Danish manufacturer Carl Hansen & Søn, whose craftsmen perfected the 100 steps it takes to make, including the weaving of 395 feet of paper cord for its seat.In the 1940s, Danish designer Hans Wegner saw a series of photographs of Chinese tradesmen—and became fascinated with the chairs on which they were sitting. He set about creating his own version of the Ming chair, incorporating a curved, bent-wood armrest and the namesake back, whose pronged wishbone shape allowed for a more graceful silhouette. He introduced the chair with Danish manufacturer Carl Hansen & Søn, whose craftsmen perfected the 100 steps it takes to make, including the weaving of 395 feet of paper cord for its seat."
         },
         {
            image:"https://hips.hearstapps.com/hmg-prod/images/ancient-folding-chair-royalty-free-image-1580745644.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"Ming Chair",
            price:2400,
            description:"Given that the Ming dynasty ruled China from 1368 to 1644, there's a wide range of furniture styles from the period. Towards the later years, though, the nation saw the production of intricate, carved wood furniture, much of it produced—thanks to discoveries in joinery—without the use of nails. The curved backs and folding seats of the Ming era would become especially influential in later furniture designs."
         },
         { 
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580742738-PD_1378_ALT2.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:3,
            productName:"Charles and Ray Eames Eames LCW Chair",
            price:1395,
            description:"After graduating from the prestigious Cranbrook Academy in Michigan, designer couple Charles and Ray Eames moved to Los Angeles, where they began experimenting with new materials and processes for making furniture. Part of this experimentation resulted in what they called the  a mechanism for pressing sheets of thin wood veneer together and bending them. The LCW, introduced in 1946, is the result of this process, with a back and seat shaped to perfectly cradle a sitter of any size."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580743246-PD_5667_ALT2.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:5,
            productName:"Charles and Ray Eames Eames Lounge Chair",
            price:5521,
            description:"While the Eameses are best known for their efforts to create inexpensive furniture pieces that could be easily mass-produced, their now-ubiquitous lounge chair and ottoman were the couple's take on luxury. They endeavored to create the most comfortable chair possible, one that had the warm, worn feel of a Herman Miller released the seat in 1956 in wood and black leather; it's now available in a slew of upholstery and finish options and continues to appear in interiors around the world."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580743492-292_8e12cf6768-1006navy-large.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:4.5,
            productName:"Emeco Navy Chair",
            price:595,
            description:"You've likely seen this chair at your local big-box store: Widely knocked off, the original Navy chair was first introduced by Pennsylvania brand Emeco in 1944 for use on warships. It's the result of a signature, 77-step (!) process in which welders melt recycled aluminum to form the sturdy, lightweight chair."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580743716-30502372-1580743705.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:5,
            productName:"Verner Panton Panton Chair",
            price:1880,
            description:"In the 1960s, designer Verner Panton began to experiment with an innovative, new product: plastic. Captivated by its flexibility, the Danish designer set about creating a seat that was more sculpture than furniture (but also extremely comfortable). The result is the cantilevered, S-shaped Panton chair, which was the first ever molded plastic chair when released by Swiss manufacturer Vitra in 1967."
         },
         {
            image:"https://hips.hearstapps.com/hmg-prod/images/louis-xiv-style-walnut-armchair-with-upholstered-back-and-news-photo-1580743979.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"Louis XIV Armchair",
            price:878,
            description:"The furniture from the reign of France's Louis XIV—the ruler who oversaw the construction of Versailles—is characterized by intricate carving, rare wood, and heavy upholstery, like in this walnut seat with a dark, brocade fabric. Telltale signs of Louis XIV-style chairs include straight backs, curved armrests, and crossed stretchers, which can either be H-or X-shaped (as on this chair)."
         },
         {
            image:"https://hips.hearstapps.com/hmg-prod/images/pair-of-louis-xv-style-armchairs-made-for-louise-elisabeth-news-photo-1580744233.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:5,
            productName:"Louis XV Armchair",
            price:12457,
            description:"By the reign of Louis XV (1715 - 1774), chairs had evolved to take on more curvaceous shapes, with slanted backs and bowed cabriole legs. Upholstery on these chairs often emphasizes their shape, with curve-shaped edges and oval tufts on the armrests."
         },
         {
            image:"https://hips.hearstapps.com/hmg-prod/images/louis-xvi-style-white-and-gray-blue-lacquered-wood-news-photo-1580744523.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:3,
            productName:"Louis XVI Armchair",            
            price:878,
            description:"Louis XVI was France's last monarch before the country's revolution (and the husband of Marie Antoinette). Chairs from the time of his reign are characterized by rounded seat backs—which are often curved for comfort—and plush seats. A revived interest in classical style makes for details that nod to Greek and Roman decoration, like carved, fluted legs reminiscent of classic columns."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580774193-SBUteNj3dpY3_n2mAagqsT-UbPTRH_p76Ecqtn9luz.jpg?crop=0.694xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"MIX Furniture Yoruba Chair",
            price:987,
            description:"Stunningly intricate in design, these armchairs, native to the Yoruba tribes of Western Africa, are covered in a pattern created entirely from beads. Originally designed for ceremonial purposes, the chairs can comprise over 100,000 beads, each hand-applied to the armchair."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580744830-screen-shot-2020-02-03-at-7-48-01-am-1580744820.png?crop=1xw:1xh;center,top&resize=980:*",
            rating:3,
            productName:"Marcel Breuer Cesca Chair",
            price:499,
            description:"In 1925, Hungarian-American designer Marcel Breuer introduced the first chair made from tubular steel, the Wassily. Three years later, he (through Knoll) introduced the Cesca, a simplified design that marries traditional (the cane seat) and innovative (the cantilevered, steel base). The chair's s-shaped frame provides just enough bounce to make it comfortable without sacrificing support. The chair is in MoMA's permanent collection."
         },
         {
            image:"https://hips.hearstapps.com/hmg-prod/images/bkf-chair-1580746081.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:5,
            productName:"Butterfly Chair",
            price:799,
            description:"You probably had one in your dorm room, but did you know this folding chair has quite the design past? It was designed in Buenos Aires in 1938 by the design collective Grupo Austral, a group of three architects who met while working for Le Corbusier. The chair caught the attention of curators at MoMA, who requested a model. In 1947, Knoll began carrying it, swapping out the original black legs for polished chrome—but stopped production in 1951. Now, versions of the chair style can be found everywhere from CB2 to Target."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746458-resize.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:5,
            productName:"Eero Saarinen Womb Chair",
            price:4198,
            description:"When Eero Saarinen first began working with Florence Knoll, she challenged him to create the world's most comfortable chair. What could be more comfortable, he reasoned, than the womb? Enter, the aptly-named chair, first released in 1948 and continually produced by Knoll since then."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746573-250L-C_~_(VO)_VOBLK_FZ.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"Ludwig Mies van der Rohe Barcelona Chair",
            price:6749,
            description:"When tasked with furnishing the German pavilion at the 1929 Barcelona International Exposition, German-American architect Mies van der Rohe conceived a chair fit for royalty—but in keeping with his modernist aesthetic. The leather-and-chrome seat (and accompanying ottoman) have been produced by Knoll ever since."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580748397-PD_1872_ALT4.jpg?crop=0.630xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"Philippe Starck Louis Ghost Chair",
            price:465,
            description:"Now you see it...now you don't. In 2002, designer Philippe Starck put his own spin on the Louis XVI armchair, rendering it in clear polycarbonate for Kartell. The design—which is offered both as an armchair and without arms—became an instant sensation...and spurred dozens of knockoffs."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580748907-1970s-vintage-brass-italian-chiavari-chair-7011.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"Chiavari Chair",
            price:999,
            description:"Manufactured in one Italian town since 1807, this chair inspired designers from Michael Thonet to Gio Ponti, who riffed on its graceful shape and lightweight in their own modern designs. Brass versions of the Chiavari from the 1970s, like the one shown, are highly sought-after through vintage sellers."
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580749454-18f4bff8a18dc9cc138345088b28f145.image.745x745.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"Windsor Chair",
            price:785,
            description:"The Windsor chair, characterized by its spindled chair back, has a history as old as the United States. The exact origins of the chair style remain somewhat murky, but Windsor chairs are thought to have first been produced in the 16th century in Ireland and Wales. English settlers introduced them to North America, where they continued to gain popularity. Many American models are made by Amish woodworkers.",
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580749651-PD_3934_MAIN.jpg?crop=0.630xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"Michael Thonet Era Chair",
            price:878,
            description:"In 1859, German cabinetmaker Michael Thonet created what would come to be the quintessential restaurant chair. Defined by its round seat and bentwood back, the Era chair (sometimes called a Thonet chair) is both lightweight and durable, making it ideal for commercial settings. Notable fans of the chair include Le Corbusier and Pierre-Auguste Renoir.",
         },
         {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580777449-PD_5720_MAIN.jpg?crop=1xw:1xh;center,top&resize=980:*",
            rating:4,
            productName:"josef Hoffman + Josef Frank Hoffmann Side Chair",
            price:445,
            description:"A stylistic continuation of Thonet's chair, the Hoffmann side chair, designed by Josef Hoffmann and Josef Frank in 1925, is produced at the same bentwood factory which Thonet founded. It adapts many of Thonet's principles to the Viennese Succession style."

         }
         

    ],

    },

    {
        type:"Latest",
        products:[
            {
           image:"https://htmlbeans.com/html/schon/images/products/img22.jpg",
           rating:3,
           productName:"Bombi Chair",
           price:399.00,
           description:"A stylistic continuation of Thonet's chair, the Hoffmann side chair, designed by Josef Hoffmann and Josef Frank in 1925, is produced at the same bentwood factory which Thonet founded. It adapts many of Thonet's principles to the Viennese Succession style."
            },
            {
               image:"https://hips.hearstapps.com/hmg-prod/images/pair-of-louis-xv-style-armchairs-made-for-louise-elisabeth-news-photo-1580744233.jpg?crop=1xw:1xh;center,top&resize=980:*",
               rating:5,
               productName:"Louis XV Armchair",
               price:12457,
               description:"By the reign of Louis XV (1715 - 1774), chairs had evolved to take on more curvaceous shapes, with slanted backs and bowed cabriole legs. Upholstery on these chairs often emphasizes their shape, with curve-shaped edges and oval tufts on the armrests."
            },
            {
               image:"https://hips.hearstapps.com/hmg-prod/images/louis-xvi-style-white-and-gray-blue-lacquered-wood-news-photo-1580744523.jpg?crop=1xw:1xh;center,top&resize=980:*",
               rating:3,
               productName:"Louis XVI Armchair",            
               price:878,
               description:"Louis XVI was France's last monarch before the country's revolution (and the husband of Marie Antoinette). Chairs from the time of his reign are characterized by rounded seat backs—which are often curved for comfort—and plush seats. A revived interest in classical style makes for details that nod to Greek and Roman decoration, like carved, fluted legs reminiscent of classic columns."
            },
            {
               image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580774193-SBUteNj3dpY3_n2mAagqsT-UbPTRH_p76Ecqtn9luz.jpg?crop=0.694xw:1xh;center,top&resize=980:*",
               rating:4,
               productName:"MIX Furniture Yoruba Chair",
               price:987,
               description:"Stunningly intricate in design, these armchairs, native to the Yoruba tribes of Western Africa, are covered in a pattern created entirely from beads. Originally designed for ceremonial purposes, the chairs can comprise over 100,000 beads, each hand-applied to the armchair."
            },
            {
               image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580744830-screen-shot-2020-02-03-at-7-48-01-am-1580744820.png?crop=1xw:1xh;center,top&resize=980:*",
               rating:3,
               productName:"Marcel Breuer Cesca Chair",
               price:499,
               description:"In 1925, Hungarian-American designer Marcel Breuer introduced the first chair made from tubular steel, the Wassily. Three years later, he (through Knoll) introduced the Cesca, a simplified design that marries traditional (the cane seat) and innovative (the cantilevered, steel base). The chair's s-shaped frame provides just enough bounce to make it comfortable without sacrificing support. The chair is in MoMA's permanent collection."
            },
            {
               image:"https://hips.hearstapps.com/hmg-prod/images/bkf-chair-1580746081.jpg?crop=1xw:1xh;center,top&resize=980:*",
               rating:5,
               productName:"Butterfly Chair",
               price:799,
               description:"You probably had one in your dorm room, but did you know this folding chair has quite the design past? It was designed in Buenos Aires in 1938 by the design collective Grupo Austral, a group of three architects who met while working for Le Corbusier. The chair caught the attention of curators at MoMA, who requested a model. In 1947, Knoll began carrying it, swapping out the original black legs for polished chrome—but stopped production in 1951. Now, versions of the chair style can be found everywhere from CB2 to Target."
            },
            {
               image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746458-resize.jpg?crop=1xw:1xh;center,top&resize=980:*",
               rating:5,
               productName:"Eero Saarinen Womb Chair",
               price:4198,
               description:"When Eero Saarinen first began working with Florence Knoll, she challenged him to create the world's most comfortable chair. What could be more comfortable, he reasoned, than the womb? Enter, the aptly-named chair, first released in 1948 and continually produced by Knoll since then."
            },
            {
               image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746573-250L-C_~_(VO)_VOBLK_FZ.jpg?crop=1xw:1xh;center,top&resize=980:*",
               rating:4,
               productName:"Ludwig Mies van der Rohe Barcelona Chair",
               price:6749,
               description:"When tasked with furnishing the German pavilion at the 1929 Barcelona International Exposition, German-American architect Mies van der Rohe conceived a chair fit for royalty—but in keeping with his modernist aesthetic. The leather-and-chrome seat (and accompanying ottoman) have been produced by Knoll ever since."
            },
            {
               image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580748397-PD_1872_ALT4.jpg?crop=0.630xw:1xh;center,top&resize=980:*",
               rating:4,
               productName:"Philippe Starck Louis Ghost Chair",
               price:465,
               description:"Now you see it...now you don't. In 2002, designer Philippe Starck put his own spin on the Louis XVI armchair, rendering it in clear polycarbonate for Kartell. The design—which is offered both as an armchair and without arms—became an instant sensation...and spurred dozens of knockoffs."
            },
            {
               image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580748907-1970s-vintage-brass-italian-chiavari-chair-7011.jpg?crop=1xw:1xh;center,top&resize=980:*",
               rating:4,
               productName:"Chiavari Chair",
               price:999,
               description:"Manufactured in one Italian town since 1807, this chair inspired designers from Michael Thonet to Gio Ponti, who riffed on its graceful shape and lightweight in their own modern designs. Brass versions of the Chiavari from the 1970s, like the one shown, are highly sought-after through vintage sellers."
            },
    ]
    }
   ,
    {
      type:"bestseller",
      products:[ {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580774193-SBUteNj3dpY3_n2mAagqsT-UbPTRH_p76Ecqtn9luz.jpg?crop=0.694xw:1xh;center,top&resize=980:*",
         rating:4,
         productName:"MIX Furniture Yoruba Chair",
         price:987,
         description:"Stunningly intricate in design, these armchairs, native to the Yoruba tribes of Western Africa, are covered in a pattern created entirely from beads. Originally designed for ceremonial purposes, the chairs can comprise over 100,000 beads, each hand-applied to the armchair."
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580744830-screen-shot-2020-02-03-at-7-48-01-am-1580744820.png?crop=1xw:1xh;center,top&resize=980:*",
         rating:3,
         productName:"Marcel Breuer Cesca Chair",
         price:499,
         description:"In 1925, Hungarian-American designer Marcel Breuer introduced the first chair made from tubular steel, the Wassily. Three years later, he (through Knoll) introduced the Cesca, a simplified design that marries traditional (the cane seat) and innovative (the cantilevered, steel base). The chair's s-shaped frame provides just enough bounce to make it comfortable without sacrificing support. The chair is in MoMA's permanent collection."
      },
      {
         image:"https://hips.hearstapps.com/hmg-prod/images/bkf-chair-1580746081.jpg?crop=1xw:1xh;center,top&resize=980:*",
         rating:5,
         productName:"Butterfly Chair",
         price:799,
         description:"You probably had one in your dorm room, but did you know this folding chair has quite the design past? It was designed in Buenos Aires in 1938 by the design collective Grupo Austral, a group of three architects who met while working for Le Corbusier. The chair caught the attention of curators at MoMA, who requested a model. In 1947, Knoll began carrying it, swapping out the original black legs for polished chrome—but stopped production in 1951. Now, versions of the chair style can be found everywhere from CB2 to Target."
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746458-resize.jpg?crop=1xw:1xh;center,top&resize=980:*",
         rating:5,
         productName:"Eero Saarinen Womb Chair",
         price:4198,
         description:"When Eero Saarinen first began working with Florence Knoll, she challenged him to create the world's most comfortable chair. What could be more comfortable, he reasoned, than the womb? Enter, the aptly-named chair, first released in 1948 and continually produced by Knoll since then."
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746573-250L-C_~_(VO)_VOBLK_FZ.jpg?crop=1xw:1xh;center,top&resize=980:*",
         rating:4,
         productName:"Ludwig Mies van der Rohe Barcelona Chair",
         price:6749,
         description:"When tasked with furnishing the German pavilion at the 1929 Barcelona International Exposition, German-American architect Mies van der Rohe conceived a chair fit for royalty—but in keeping with his modernist aesthetic. The leather-and-chrome seat (and accompanying ottoman) have been produced by Knoll ever since."
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580748397-PD_1872_ALT4.jpg?crop=0.630xw:1xh;center,top&resize=980:*",
         rating:4,
         productName:"Philippe Starck Louis Ghost Chair",
         price:465,
         description:"Now you see it...now you don't. In 2002, designer Philippe Starck put his own spin on the Louis XVI armchair, rendering it in clear polycarbonate for Kartell. The design—which is offered both as an armchair and without arms—became an instant sensation...and spurred dozens of knockoffs."
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580748907-1970s-vintage-brass-italian-chiavari-chair-7011.jpg?crop=1xw:1xh;center,top&resize=980:*",
         rating:4,
         productName:"Chiavari Chair",
         price:999,
         description:"Manufactured in one Italian town since 1807, this chair inspired designers from Michael Thonet to Gio Ponti, who riffed on its graceful shape and lightweight in their own modern designs. Brass versions of the Chiavari from the 1970s, like the one shown, are highly sought-after through vintage sellers."
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580749454-18f4bff8a18dc9cc138345088b28f145.image.745x745.jpg?crop=1xw:1xh;center,top&resize=980:*",
         rating:4,
         productName:"Windsor Chair",
         price:785,
         description:"The Windsor chair, characterized by its spindled chair back, has a history as old as the United States. The exact origins of the chair style remain somewhat murky, but Windsor chairs are thought to have first been produced in the 16th century in Ireland and Wales. English settlers introduced them to North America, where they continued to gain popularity. Many American models are made by Amish woodworkers.",
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580749651-PD_3934_MAIN.jpg?crop=0.630xw:1xh;center,top&resize=980:*",
         rating:4,
         productName:"Michael Thonet Era Chair",
         price:878,
         description:"In 1859, German cabinetmaker Michael Thonet created what would come to be the quintessential restaurant chair. Defined by its round seat and bentwood back, the Era chair (sometimes called a Thonet chair) is both lightweight and durable, making it ideal for commercial settings. Notable fans of the chair include Le Corbusier and Pierre-Auguste Renoir.",
      },
      {
         image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580777449-PD_5720_MAIN.jpg?crop=1xw:1xh;center,top&resize=980:*",
         rating:4,
         productName:"josef Hoffman + Josef Frank Hoffmann Side Chair",
         price:445,
         description:"A stylistic continuation of Thonet's chair, the Hoffmann side chair, designed by Josef Hoffmann and Josef Frank in 1925, is produced at the same bentwood factory which Thonet founded. It adapts many of Thonet's principles to the Viennese Succession style."

      }
]
    }
 
]
  


export default data;