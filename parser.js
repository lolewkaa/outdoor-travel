import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const baseUrl = 'https://naturalist.travel/catalog/';

async function fetchData(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(`Ошибка при получении данных: ${error}`);
    }
}

async function parseDetailedData(url) {
    const html = await fetchData(url);
    const $ = cheerio.load(html);
    
    // Извлечение текста с селектора about__text-hide
    const additionalData = $(`.about__text-hide`).text();

    // Извлечение всех текстов с селектора .about__item-house span и преобразование в массив
    const types = $(`.about__item-house span`).map((i, el) => $(el).text().trim()).get();

    // Удаляем лишние пробелы и новые строки из additionalData
    const cleanedAdditionalData = additionalData.replace(/\s+/g, ' ').trim();

    const fullLocation = $(`.area-info span`).text();

    const info = $('.about__item-domestic').text().trim();

    const firstComfortList = $('ul.object__comforts-list').eq(0);
    const comfort = firstComfortList.find('li')
        .map((i, el) => $(el).text().trim())
        .get();

    const secondComfortList = $('ul.object__comforts-list').eq(1);
    const entertainment = secondComfortList.find('li')
        .map((i, el) => $(el).text().trim())
        .get();

    const environment = $(`.about__item-content span`).map((i, el) => $(el).text().trim()).get();

    return {
        about: cleanedAdditionalData,
        type: types,
        fullLocation: fullLocation,
        info: info,
        entertainment: entertainment,
        environment: environment,
        comfort: comfort,
    };
}

async function parseData(url) {
    const html = await fetchData(url);
    const $ = cheerio.load(html);
    const results = [];

    const rows = $('.object-row');
    for (const element of rows.toArray()) {
        const title = $(element).find('.object-row__title').text();
        const description = $(element).find('.object-row__description span').first().text();
        const price = $(element).find('.object-row__price_wrapper div').text();
        const location = $(element).find('.area-info span').text();
        const discount = $(element).find('.tag').first().text();
        const gallery = [];

        const link = $(element).attr('href');
        const fullUrl = new URL(link, baseUrl).href;

        const id = link.split('/')[2];

        const { about, type, fullLocation, info, entertainment, environment, comfort } = await parseDetailedData(fullUrl);

        $(element).find('.swiper-wrapper img').each((index, imgElement) => {
            const imgPath = $(imgElement).attr('data-src') || $(imgElement).attr('src');
            if (imgPath) {
                const fullImgUrl = new URL(imgPath, baseUrl).href; 
                gallery.push(fullImgUrl); 
            }
        });

        results.push({ id, title, description, location, gallery, price, discount, about, type, fullLocation, info, entertainment, environment, comfort }); 
    }

    return results;
}

async function getAllData(pagesCount) {
    const allResults = [];

    for (let i = 1; i <= pagesCount; i++) {
        const pageUrl = `${baseUrl}?page=${i}`;
        const results = await parseData(pageUrl);
        allResults.push(...results);
    }

    return allResults;
}
//node parser.js

getAllData(2).then(results => {
    console.log(results);
    fs.writeFile('db.json', JSON.stringify(results, null, 2), (err) => {
        if (err) {
            console.error('Ошибка при сохранении данных в файл:', err);
        } else {
            console.log('Данные успешно сохранены в db.json');
        }
    });
});