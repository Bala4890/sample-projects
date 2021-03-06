/**
 * Created by ajitkumar on 22/04/15.
 */
Ext.define('AppsBoard.view.dashboard.parts.SupportTickets', {
    requires: [

        'Ext.sparkline.Bar',
        'Ext.Component'
    ],
    extend: 'Ext.dashboard.Part',
    alias: 'part.supporttickets',

    viewTemplate: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        header: false,
        draggable: false,
        resizable: false,
        bodyCls: 'greenbg',
        items: [{
            xtype: 'sparklineline',
            lineColor: '#FFFFFF',
            lineWidth: 3,
            margin: 20,
            height: 50,
            width: 90,
            values: [2, 4, 6, -3, 7, 10, 3, 5, 9, 2, 4, 6, -3, 7, 10, 3, 5, 9]
        }, {
            xtype: 'component',
            flex: 1,
            //align: 'stretch',
            html: '<div style="padding-left: 10px;padding-top: 20px;"><small>Support Tickets</small><span class="bigtext">23,856</span></div>'
        }]
    }
});