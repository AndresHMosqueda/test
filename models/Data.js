const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
        PONumber: String,
        POCreateDate: Date,
        RequestedExWorksDate: Date,
        RequiredDestination: Date,
        SupplierCode: String,
        SupplierName: String,
        SupplierAddress: String,
        SupplierAddressDetails: String,
        SupplierContactId: Number,
        SupplierContact: String,
        SupplierContactDetails: String,
        SupplierContactEmail: String,
        ConsigneeCode: String,
        ConsigneeName: String,
        ConsigneeAddress: String,
        ConsigneeAddressDetails: String,
        ConsigneeContactId: Number,
        ConsigneeContact: String,
        ConsigneeContactDetails: String,
        ConsigneeContactEmail: String,
        DeliveryCode: String,
        DeliveryName: String,
        DeliveryAddress: String,
        DeliveryAddressDetails: String,
        DeliveryContactId: Number,
        DeliveryContact: String,
        DeliveryContactDetails: String,
        DeliveryContactEmail: String,
        ConfirmationNumber: String,
        ConfirmationDate: Date,
        CodIncoterm: String,
        Incoterm: String,
        OriginCountryId: String,
        OriginCountry: String,
        TransportModeId: Number,
        TransportMode: String,
        PODescription: String,
        ProductTypeId: Number,
        ProductType: String,
        AdditionalPOTerms: String,
        TotalQtyOrdered: String,
        TotalQtyReceived: Number,
        TotalQtyBooked: Number,
        TotalQtyShipped: Number,
        TotalQtyToReceive: Number,
        TotalQtyConfirmed: Number,
        Comments: String,
        StatusId: Number,
        StatusDesc: String,
        DivisionId: Number,
        Division: String,
        CruiseId: Number,
        Cruise: String,
        PromiseCargoReadyDate: Date,
        ActualCargoReadyDate: String,
        SupplierComment: String,
        OrderValue: Number,
        OrderCurrencyId: String,
        Currency: String
    

});

module.exports = mongoose.model('dataPO', dataSchema)