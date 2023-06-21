import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReclamationService } from './app/data/reclamation.service';

describe('ReclamationService', () => {
  let service: ReclamationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReclamationService]
    });
    service = TestBed.inject(ReclamationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all reclamations', () => {
    const mockReclamations = [{ id: 1, recTitle: 'Reclamation 1' }, { id: 2, recTitle: 'Reclamation 2' }];

    service.getAllReclamations().subscribe((reclamations: any) => {
      expect(reclamations).toEqual(mockReclamations);
    });

    const req = httpMock.expectOne('/api/reclamations');
    expect(req.request.method).toBe('GET');
    req.flush(mockReclamations);
  });

  it('should create a reclamation', () => {
    const mockReclamation = { userId: '1', recTitle: 'New Reclamation' };

    service.createReclamation(mockReclamation).subscribe((createdReclamation: any) => {
      expect(createdReclamation).toEqual(mockReclamation);
    });

    const req = httpMock.expectOne('/api/reclamations');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockReclamation);
    req.flush(mockReclamation);
  });

  // Add more test cases for other methods...
});
