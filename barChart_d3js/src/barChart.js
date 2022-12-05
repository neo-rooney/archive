export const barChart = data => {
    //1. csv로부터 데이터 불러오기
    d3.csv(data)
        .then(dataSet => {
            dataSet.forEach(d => {
                // 2. 불러온 데이터의 type 변환
                d.x = d.date;
                d.y = +d.value;
            });
            const svg = d3.select("svg");

            //3. range의 화면 범위를 정하기위해 SVG의 CSS width, height값을 구해서 지정
            let width = parseInt(svg.style("width"), 10) - 30;
            let height = parseInt(svg.style("height"), 10) - 20;

            //4. 차트전체를 구성하는 그룹생성, 그룹자체는 30px이동, 차트생성시 y축과 첫번째 그래프가 겹치는것을 방지하기 위함
            let svgG = svg.append("g").attr("transform", "translate(30, 0)");

            //5. x축의 range 지정, 고정된 문자열이므로 scaleBand()
            let xScale = d3
                .scaleBand()
                .domain(dataSet.map(d => d.x))
                .range([0, width])
                .padding(0.2);

            //6. 척도를 이용하여 x축(axis) 작성
            svgG.append("g")
                .attr("class", "grid")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(xScale).tickSize(-height));

            //7. y축의 range 지정, 일반 숫자값이므로 scaleLinear()
            let yScale = d3
                .scaleLinear()
                .domain([0, d3.max(dataSet, d => d.y)])
                .range([height, 0]);

            //8. 척도를 용하여 y축(axis) 작성
            svgG.append("g")
                .attr("class", "grid")
                .call(
                    d3
                        .axisLeft(yScale)
                        .ticks(5)
                        .tickSize(-width)
                );

            const barG = svgG.append("g");

            //9. 데이터를 이용하여 Bar Chart 생성
            barG.selectAll("rect")
                .data(dataSet)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("height", (d, i) => height - yScale(d.y))
                .attr("width", xScale.bandwidth())
                .attr("x", (d, i) => xScale(d.x))
                .attr("y", (d, i) => yScale(d.y));

            //10. 데이터를 이용하여 Chart text 생성
            barG.selectAll("text")
                .data(dataSet)
                .enter()
                .append("text")
                .text(d => d.y + "$")
                .attr("class", "text")
                .attr("x", function(d, i) {
                    return xScale(d.x) + xScale.bandwidth() / 2;
                })
                .style("text-anchor", "middle")
                .attr("y", function(d, i) {
                    return yScale(d.y) + 15;
                });
        })
        .catch(error => {
            console.log("then error : ", error);
        });
};
