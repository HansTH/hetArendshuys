import React from 'react';

export default function privacyData({ storeName, contactInfo }) {
  const { zipcode, telefoonNumber, email, city, address } = contactInfo;
  return [
    {
      id: 1,
      header: `Gegegevens, ${storeName}`,
      content: (
        <div>
          <p>
            {storeName}, gevestigd aan Langestraat 42 in Delden, is
            verantwoordelijk voor de verwerking van persoonsgegevens zoals
            weergegeven in deze privacyverklaring.
          </p>
          <p>
            <strong>Contactgegevens</strong>:
          </p>
          <p>{storeName}</p>
          <p>{address}</p>
          <p>{`${zipcode} ${city}`}</p>
          <p>{telefoonNumber}</p>
          <p>{email}</p>
          <p>
            Monique Oude Heuvel - Ensink is de Functionaris Gegevensbescherming
            van Het Arendshuys. Zij is te bereiken via {email}
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: 'Persoonsgegevens die wij verwerken',
      content: (
        <p>
          {storeName} verwerkt geen persoonsgegevens omdat op onze site geen
          persoonsgegevens achter gelaten kunnen worden. Ook gebruiken we geen
          social media plugins.
        </p>
      ),
    },
    {
      id: 3,
      header: 'Bijzondere en/of gevoelige persoonsgegevens die wij verwerken',
      content: (
        <p>
          Onze website en/of dienst heeft niet de intentie gegevens te
          verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij
          ze toestemming hebben van ouders of voogd. We kunnen echter niet
          controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook
          aan betrokken te zijn bij de online activiteiten van hun kinderen, om
          zo te voorkomen dat er gegevens over kinderen verzameld worden zonder
          ouderlijke toestemming. Als u er van overtuigd bent dat wij zonder die
          toestemming persoonlijke gegevens hebben verzameld over een
          minderjarige, neem dan contact met ons op via {email}, dan verwijderen
          wij deze informatie
        </p>
      ),
    },
    {
      id: 4,
      header:
        'Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken',
      content: (
        <div>
          <p>
            {storeName} verwerkt uw persoonsgegevens voor de volgende doelen:
            email beantwoorden.
          </p>
          <p>
            - U te kunnen bellen of e-mailen indien dit nodig is om onze
            dienstverlening uit te kunnen voeren
          </p>
        </div>
      ),
    },
    {
      id: 5,
      header: 'Geautomatiseerde besluitvorming',
      content: (
        <p>
          {storeName} maakt geen gebruik van geautomatiseerde verwerkingen
          systemen.
        </p>
      ),
    },
    {
      id: 6,
      header: 'Hoe lang we persoonsgegevens bewaren',
      content: (
        <p>
          {storeName} bewaart uw persoonsgegevens niet langer dan strikt nodig
          is om de doelen te realiseren waarvoor uw gegevens worden verzameld.
          Wij hanteren de volgende bewaartermijnen voor de volgende
          (categorieën) van persoonsgegevens: 2 jaar.
        </p>
      ),
    },
    {
      id: 7,
      header: 'Delen van persoonsgegevens met derden',
      content: (
        <p>
          {storeName} verstrekt uitsluitend aan derden en alleen als dit nodig
          is voor de uitvoering van onze overeenkomst met u of om te voldoen aan
          een wettelijke verplichting.
        </p>
      ),
    },
    {
      id: 8,
      header: 'Cookies, of vergelijkbare technieken, die wij gebruiken',
      content: (
        <p>{storeName} gebruikt geen cookies of vergelijkbare technieken.</p>
      ),
    },
    {
      id: 9,
      header: 'Gegevens inzien, aanpassen of verwijderen',
      content: (
        <p>
          U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of
          te verwijderen. Daarnaast heeft u het recht om uw eventuele
          toestemming voor de gegevensverwerking in te trekken of bezwaar te
          maken tegen de verwerking van uw persoonsgegevens door {storeName}
          en heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u
          bij ons een verzoek kunt indienen om de persoonsgegevens die wij van u
          beschikken in een computerbestand naar u of een ander, door u genoemde
          organisatie, te sturen. U kunt een verzoek tot inzage, correctie,
          verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek
          tot intrekking van uw toestemming of bezwaar op de verwerking van uw
          persoonsgegevens sturen naar {email}. Om er zeker van te zijn dat het
          verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw
          identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie uw
          pasfoto, MRZ (machine readable zone, de strook met nummers onderaan
          het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit
          ter bescherming van uw privacy. We reageren zo snel mogelijk, maar
          binnen vier weken, op uw verzoek. {storeName} wil u er tevens op
          wijzen dat u de mogelijkheid heeft om een klacht in te dienen bij de
          nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via
          de volgende link:
          https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons
        </p>
      ),
    },
    {
      id: 10,
      header: 'Hoe wij persoonsgegevens beveiligen',
      content: (
        <p>
          {storeName} neemt de bescherming van uw gegevens serieus en neemt
          passende maatregelen om misbruik, verlies, onbevoegde toegang,
          ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
          Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er
          aanwijzingen zijn van misbruik, neem dan contact op met onze
          klantenservice of via {email}
        </p>
      ),
    },
  ];
}
