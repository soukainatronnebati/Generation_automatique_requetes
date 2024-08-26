import {AfterViewInit, Component} from '@angular/core';
import { DataSet } from 'vis-data/peer';
import {Edge, Network, Node} from 'vis-network/peer';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent implements AfterViewInit {
  private network: Network | undefined;

  ngAfterViewInit(): void {

      const nodes: Node[] = [
        {id: 1, label: '  Requetes  ', color: 'orange', shape: 'circle', font: {size: 30, color: '#000000'}},
        {id: 2, label: '  Habilitation  ', color: 'orange', shape: 'circle', font: {size: 30, color: '#000000'}},
        {id: 3, label: '  PIDI  ', color: 'orange', shape: 'circle', font: {size: 30, color: '#000000'}},
        {id: 4, label: ' Requetes\nRisque ', color: 'orange', shape: 'circle', font: {size: 30, color: '#000000'}},
        {id: 5, label: ' Requetes\nMajeur ', color: 'orange', shape: 'circle', font: {size: 30, color: '#000000'}},

        // Habilitation sub-nodes
        {id: 6, label: 'Ajout code\nfournisseur', color: 'orange', shape: 'circle', font: {size: 30, color: '#000000'}},
        {
          id: 7,
          label: '  Modification\nEmail \ncompte SIU  ',
          color: 'orange',
          shape: 'circle',
          font: {size: 30, color: '#000000'}
        },
        {
          id: 8,
          label: '  Habiliter\nutilisateur à\n des \nentités PIDI   ',
          color: 'orange',
          shape: 'circle',
          font: {size: 30, color: '#000000'}
        },

        // PIDI sub-nodes
        {
          id: 9,
          label: '  Ajouter un code\nProduit  ',
          color: 'orange',
          shape: 'circle',
          font: {size: 30, color: '#000000'}
        },
        {
          id: 10,
          label: 'Modifier un code\nproduit',
          color: 'orange',
          shape: 'circle',
          font: {size: 30, color: '#000000'}
        },
        {
          id: 11,
          label: 'Ajouter un code\nActivité',
          color: 'orange',
          shape: 'circle',
          font: {size: 30, color: '#000000'}
        },
        {
          id: 12,
          label: 'Modifier un code\nactivité',
          color: 'orange',
          shape: 'circle',
          font: {size: 30, color: '#000000'}
        },
        {
          id: 13,
          label: 'Ajouter un couple\nproduit activité',
          color: 'orange',
          shape: 'circle',
          font: {size: 30, color: '#000000'}
        }
      ];

      const edges: Edge[] = [
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
        {from: 1, to: 5},
        {from: 2, to: 6},
        {from: 2, to: 7},
        {from: 2, to: 8},
        {from: 3, to: 9},
        {from: 3, to: 10},
        {from: 3, to: 11},
        {from: 3, to: 12},
        {from: 3, to: 13},
        {from: 3, to: 14}
      ];

      const nodesDataSet = new DataSet<Node>(nodes);
      const edgesDataSet = new DataSet<Edge>(edges);

      const container = document.getElementById('network');
      if (container) {
        const data = {nodes: nodesDataSet, edges: edgesDataSet};
        const options = {
          layout: {
            hierarchical: false
          },
          physics: {
            enabled: true,
            barnesHut: {
              gravitationalConstant: -8000,
              centralGravity: 0.3,
              springLength: 200,
              springConstant: 0.04,
              damping: 0.09
            }
          },
          nodes: {
            shape: 'dot',
            size: 10,
            font: {
              size: 16,
              face: 'Arial',
              color: '#000000'
            }
          }
        };

        this.network = new Network(container, data, options);

        this.network.on('click', (params: any) => {
          if (params.nodes.length) {
            const nodeId = params.nodes[0];
            this.navigateToNode(nodeId);
          }
        });
      } else {
        console.error('No container element found with id "network"');
      }
    }

    navigateToNode(nodeId
  :
    number
  ):
    void {
      switch(nodeId) {
      case
        4
      :
        window.location.href = 'requeteRisque';
        break;
      case
        5
      :
        window.location.href = '/requete-majeur';
        break;
        // Add other cases if needed
      }

    }

}

