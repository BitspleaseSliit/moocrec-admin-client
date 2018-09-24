import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// import {
//     ILead,
//     ILeadState,
//     ILeadCount,
//     ILeadProfile,
//     ICreditCardBrief,
//     ILeadActivate,
//     ILeadRenewed,
//     ILeadId,
//     ILeadReport,
//     ILeadReportTemplate,
//     ILeadReportDateRange,
//     ILeadSearch,
//     ReactivateState
// } from '@models/lead';
import { HttpsClient } from './https.service';

@Injectable()
export class APIService {

    constructor(private https: HttpsClient) { }

    public getLeadProfile(reference: string): Observable<any> {
        return this.https.post<any>(`leads/ref/${reference}/profile`);
    }

    public getAllCourses(): Observable<any> {
        return this.https.get<any>(`courses/all`);
    }

    public getEdxCourses(): Observable<any> {
        return this.https.get<any>(`courses/logo/edx`);
    }

    public getDocsPendingLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/DOC-PENDING`);
    }

    public getApprPendingLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/APPR-PENDING`);
    }

    public getVerificationPendingLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/VERIFICATION`);
    }

    public getLeadsNavigation(): Observable<any> {
        return this.https.post<any>(`leads/navigation`);
    }

    public getCompleteLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/COMPLETE`);
    }

    public getActiveLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/ACTIVE`);
    }

    public getRejectedLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/REJECTED`);
    }

    public getIssuedLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/ISSUED`);
    }

    public getCanceledLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/CANCELED`);
    }

    public getActivatedLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/ACTIVATED`);
    }

    public getRenewedLeads(): Observable<any> {
        return this.https.post<any>(`leads/get/RENEWED`);
    }

    public stateChangeApprove(payload: any): Observable<any> {
        return this.https.post<any>(`leads/statechange/APPROVE`, payload);
    }

    public stateChangeReject(payload: any): Observable<any> {
        return this.https.post<any>(`leads/statechange/REJECT`, payload);
    }

    public stateChangeUndo(payload: any): Observable<any> {
        return this.https.post<any>(`leads/statechange/UNDO`, payload);
    }

    public stateChangeCancel(payload: any): Observable<any> {
        return this.https.post<any>(`leads/stateCanceled`, payload);
    }

    public updateLeadAssignee(userId: number, leadId: number): Observable<any> {
        const supervisorId = 10;
        return this.https.post(`leads/assignee/${userId}/supervisor/${leadId}`);
    }

    public getLeadsCount(): Observable<any[]> {
        return this.https.post<any[]>(`leads/count`);
    }

    public getBalanceTransferAllLeads(): Observable<any> {
        return this.https.post<any>('leads/balance/0');
    }
    public getBalanceTransferPendingLeads(): Observable<any> {
        return this.https.post<any>('leads/balance/1');
    }
    public getBalanceTransferCompletedLeads(): Observable<any> {
        return this.https.post<any>('leads/balance/2');
    }
    public getBalanceTransferRejectedLeads(): Observable<any> {
        return this.https.post<any>('leads/balance/3');
    }

    // public setBalanceTransferd(payload): Observable<ILead> {
    //     return this.https.post<ILead>('leads/balance/change', payload);
    // }

    // public setBalanceTransferReject(payload: ILeadState): Observable<ILead> {
    //     return this.https.post<ILead>('leads/balance/reject', payload);
    // }

    // public setYetToBeActivated(payload: ILeadActivate): Observable<ILead> {
    //     return this.https.post<ILead>('leads/yetToBeActivated', payload);
    // }

    // public setYetToBeRenwed(payload: ILeadRenewed): Observable<ILead> {
    //     return this.https.post<ILead>('leads/yetToBeRenewed', payload);
    // }

    // public setActivated(payload: ILeadId): Observable<ILead> {
    //     return this.https.post<ILead>('leads/statechange/ACTIVATED', payload);
    // }

    // public setRenewed(payload: ILeadId): Observable<ILead> {
    //     return this.https.post<ILead>('leads/statechange/RENEWED', payload);
    // }

    // public setReactivated(payload: ReactivateState): Observable<ILead> {
    //     return this.https.post<ILead>('leads/statechange/REACTIVATE', payload);
    // }

    // public getStates(): Observable<any> {
    //     return this.https.post<any>('leads/states');
    // }

    // public getComments(leadId: number): Observable<any> {
    //     return this.https.post(`leads/comment/${leadId}`);
    // }

    // public getLeadSequence(payload: ILeadReport): Observable<any[]> {
    //     return this.https.post(`leads/getSequence/2`, payload);
    // }

    // public getLeadsByDateRange(payload: ILeadReportDateRange): Observable<any[]> {
    //     return this.https.post(`leads/getSequence/1`, payload);
    // }

    // public getLeadsPreview(payload: ILeadReport): Observable<any[]> {
    //     return this.https.post(`leads/getSequence/3`, payload);
    // }

    // public createComment(payload: ILeadState): Observable<ILead> {
    //     return this.https.post<ILead>(`leads/comment`, payload);
    // }

    // public getCards(): Observable<ICreditCardBrief[]> {
    //     return this.https.post<ICreditCardBrief[]>(`users/cards/all`);
    // }

    // public getLastCSVLowerLimit(): Observable<any> {
    //     return this.https.post<any>(`leads/getSequence`);
    // }

    // public searchLeads(payload: ILeadSearch): Observable<any> {
    //     return this.https.post<any>(`leads/search`, payload);
    // }
}
