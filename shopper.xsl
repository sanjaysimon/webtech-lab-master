<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">  
   <xsl:output method="html"/>
   <xsl:template match = "/">
      <html>
         <head>
            <title>SHOPPERS LIST</title>
            <style>*{margin: 0;padding: 0;font-family: Century Gothic; background: #fab1a0;background-repeat: no-repeat}h1{font-size:40px;margin-top:25px}h3{font-size:24px;margin-top:25px;margin-left:50px}img{margin-top: 15px;width: 100%;height: 500px;border: 2px solid black;box-sizing: border-box;justify-content: center;text-align: center;border-radius: 10px;}p{color: black;font-size: 15px;margin-top: 15px}p:hover{background:white}
            table{margin-top:25px;margin-left:120px;margin-bottom:25px}th{background:#6c5ce7;font-size: 18px}td{background: #fff;color: black;font-size: 16px;text-align:center}td:hover{background: #fdcb6e;color: black;}th:hover{color: white;}
            </style>
         </head>
         <body bgcolor ="#3498db">
            <h1 align="center">Mental Toughness</h1>
            <p align="center">How far you go in life and the level of success you achieve is 
determined by your mental toughness.</p>
            <h3>Merchandise Order Update</h3>
            <img src="xsl.jfif"/>
            <table align="center" border = "1" bgcolor = "black">
               <tr bgcolor = "white">
                  <th>Order No.</th>
                  <th>User ID</th>
                  <th>Member Name</th>
                  <th>Address</th>
                  <th>Activity</th>    
                  <th>Gear</th>
                  <th>Item</th>    
                  <th>Quantity</th>
                  <th>Active Score</th>
                  <th>Date of Order</th>
                  <th>Payment</th>    
                  <th>Category</th>              
               </tr>               
               <xsl:for-each select = "merchandise/order">
                  <tr>
                     <td><xsl:value-of select = "@id"/></td>
                     <td><xsl:value-of select = "string(userid)"/></td>
                     <td><xsl:value-of select = "string(name)"/></td>
                     <td><xsl:value-of select = "concat(city,', ',state)"/></td>
                     <td><xsl:value-of select = "string(sport)"/></td>
                     <td><xsl:value-of select = "string(gear)"/></td>
                     <td><xsl:value-of select = "string(item)"/></td>
                     <td><xsl:value-of select = "not(quantity)"/></td>
                     <td><xsl:value-of select = "ceiling(active_score)"/></td>
                     <td><xsl:value-of select = "string(orderdate)"/></td>
                     <td><xsl:value-of select = "string(payment)"/></td>                               
                     <td>
                        <xsl:choose>
                           <xsl:when test = "ceiling(active_score) div 5 = 1">
                              Platinium
                           </xsl:when>
              
                           <xsl:when test = "ceiling(active_score) div 3 = 1">
                              Silver
                           </xsl:when>
              
                           <xsl:otherwise>
                              Gold
                           </xsl:otherwise>
                        </xsl:choose>
    
                     </td>
                  </tr> 
               </xsl:for-each>
            </table>
         </body>
      </html>
   </xsl:template>

</xsl:stylesheet>