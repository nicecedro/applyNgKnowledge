import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Membre } from '../../models/membres.model';
import { MembresService } from '../../services/membres.service';

@Component({
  selector: 'app-membre-detail',
  templateUrl: './membre-detail.component.html',
  styleUrls: ['./membre-detail.component.scss']
})
export class MembreDetailComponent implements OnInit {

  user !: Membre;
  userid !: number;
  constructor(private membreService: MembresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userid = +this.route.snapshot.params['id'];
    this.user = this.membreService.getMemberById(this.userid);
  }
}
