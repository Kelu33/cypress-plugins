/// <reference types="cypress" />

describe('File upload and download tests', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('Upload file and download it in Zip format', () => {
        cy.get('#fileField').attachFile('fileToUpload.jpg')
        cy.get('[data-bs-target="#modalArchive"]').click()
        cy.contains('Zip').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile(Cypress.config('baseUrl') + downloadLink, 'mydownloads/zipFiles', 'downloadedFromCypress.zip')
            cy.readFile('mydownloads/zipFiles/downloadedFromCypress.zip')
        })
    })

    it('Upload file and download it in Tar format', () => {
        cy.get('#fileField').attachFile('fileToUpload.jpg')
        cy.get('[data-bs-target="#modalArchive"]').click()
        cy.contains('Tar').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile(Cypress.config('baseUrl') + downloadLink, 'mydownloads/tarFiles', 'downloadedFromCypress.tar')
            cy.readFile('mydownloads/tarFiles/downloadedFromCypress.tar')
        })
    })

})